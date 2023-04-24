import React from "react";
import { PageProps, graphql } from "gatsby";
import { Layout } from '../components/layout';
import { ResumePageTemplate } from "./resume-template";
import { HTMLContent } from "../components/Content";
import { Seo } from "../components/Seo";
import { IGatsbyImageData, getSrc } from "gatsby-plugin-image";

type AuthorType = {
  name: string;
};

type SiteMetadataType = {
  author: AuthorType;
  siteUrl: string;
};

type FrontmatterType = {
  title: string;
  subtitle: string;
  resumeimage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

type DataType = {
  site: {
    siteMetadata: SiteMetadataType;
  };
  markdownRemark: {
    html: string | TrustedHTML;
    frontmatter: FrontmatterType;
  };
};

const ResumePage = ({ data }: PageProps<DataType>) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <Head siteMetadata={data.site.siteMetadata} frontmatter={frontmatter} />
      <ResumePageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        resumeimage={frontmatter.resumeimage}
        content={html}
      />
    </Layout>
  );
};

interface HeadProps {
  siteMetadata: SiteMetadataType;
  frontmatter: FrontmatterType;
}

const Head = ({ siteMetadata, frontmatter }: HeadProps) => {
  const description = "Resume of Jimmy Boinembalome";

  return (
    <Seo
      title={frontmatter.title}
      description={description}
      url={`${siteMetadata.siteUrl}/resume`}
    >
      <meta
        name="image"
        content={`${siteMetadata.siteUrl}${getSrc(frontmatter.resumeimage)}`}
      />
      <meta property="og:image:alt" content={siteMetadata.author.name} />
      <meta
        property="og:image"
        content={`${siteMetadata.siteUrl}${getSrc(frontmatter.resumeimage)}`}
      />
    </Seo>
  );
};

export default ResumePage;

export const resumePageQuery = graphql`
  query ResumePage($id: String!) {
    site {
      siteMetadata {
        author {
          name
        }
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        resumeimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
