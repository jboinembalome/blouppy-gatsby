import React from "react";
import { graphql, PageProps } from "gatsby";
import { Layout } from '../components/layout';
import { IndexPageTemplate } from "./index-page-template";
import { Seo } from "../components/Seo";
import { IGatsbyImageData } from "gatsby-plugin-image";

type FrontmatterType = {
  title: string;
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  heading: string;
  subheading: string;
  mainpitch: {
    title: string;
    description: string;
  };
};

type DataType = {
  markdownRemark: {
    frontmatter: FrontmatterType
  };
};

const IndexPage = ({ data: { markdownRemark: { frontmatter } } }: PageProps<DataType>) => {
  return (
    <Layout>
      <Head frontmatter={frontmatter} />
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
  frontmatter: FrontmatterType;
}

const Head = ({frontmatter}:  HeadProps) => {
  const description = `The personal website of Jimmy Boinembalome. ${frontmatter.mainpitch.description}`;

  return <Seo description={description} />;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
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
