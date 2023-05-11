import React from "react";
import { graphql, PageProps } from "gatsby";
import { Layout } from '../components/layout';
import { IndexPageTemplate } from "./index-page-template";
import { Seo } from "../components/seo/Seo";
import { HomePageQuery } from "../types/graphql-queries";

const IndexPage = ({ data: { markdownRemark: { frontmatter } } }: PageProps<HomePageQuery>) => {
  return (
    <Layout>
      <Head description={frontmatter.mainpitch.description} />
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  );
};

interface HeadProps {
  description: string;
}

const Head = ({ description }: HeadProps) => {
  const headDescription = `The personal website of Jimmy Boinembalome. ${description}`;

  return <Seo description={headDescription} />;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
      }
    }
  }
`;
