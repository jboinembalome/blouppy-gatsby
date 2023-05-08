import React from "react";
import { PageProps, graphql } from "gatsby";
import { Layout } from '../components/layout';
import { ResumePageTemplate } from "./resume-template";
import { Seo } from "../components/seo/Seo";
import { ImageDataLike, getSrc } from "gatsby-plugin-image";
import { ResumePageQuery } from "../types/graphql-queries";

const ResumePage = ({ data }: PageProps<ResumePageQuery>) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <Head title={frontmatter.title} siteUrl={data.site.siteMetadata.siteUrl} authorName={data.site.siteMetadata.author.name} resumeimage={frontmatter.resumeimage} />
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
  title: string;
  siteUrl: string;
  authorName: string;
  resumeimage: ImageDataLike;
}

const Head = ({ title, siteUrl, authorName, resumeimage }: HeadProps) => {
  const description = "Resume of Jimmy Boinembalome";

  return (
    <Seo
      title={title}
      description={description}
      url={`${siteUrl}/resume`}
    >
      <meta
        name="image"
        content={`${siteUrl}${getSrc(resumeimage)}`}
      />
      <meta property="og:image:alt" content={authorName} />
      <meta
        property="og:image"
        content={`${siteUrl}${getSrc(resumeimage)}`}
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
