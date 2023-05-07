import React from "react";
import { PageProps, graphql } from "gatsby";
import { Layout } from '../components/layout';
import { ResumePageTemplate } from "./resume-template";
import { Seo } from "../components/Seo";
import { IGatsbyImageData, getSrc } from "gatsby-plugin-image";

type AuthorType = {
  name: string;
};

type SocialType = {
  twitterUrl: string;
  linkedinUrl: string;
  githubUrl: string;
};

type SiteMetadataType = {
  author: AuthorType;
  siteUrl: string;
  social: SocialType;
};

type FrontmatterType = {
  title: string;
  resumeimage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  job: string;
  technicalSkills: string[];
  softSkills: string[];
  englishResumeJB: string;
  frenchResumeJB: string;
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
        title={frontmatter.title}
        resumeimage={frontmatter.resumeimage}
        job={frontmatter.job}
        technicalSkills={frontmatter.technicalSkills}
        softSkills={frontmatter.softSkills}
        englishResumeJB={frontmatter.englishResumeJB}
        frenchResumeJB={frontmatter.frenchResumeJB}
        content={html}
        twitterUrl={data.site.siteMetadata.social.twitterUrl}
        linkedinUrl={data.site.siteMetadata.social.linkedinUrl}
        githubUrl={data.site.siteMetadata.social.githubUrl}
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
        social {
          twitterUrl
          linkedinUrl
          githubUrl
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        resumeimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        job
        technicalSkills
        softSkills
        englishResumeJB
        frenchResumeJB
      }
    }
  }
`;
