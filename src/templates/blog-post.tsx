import React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "../components/Layout";
import { BlogPostTemplate } from "./blog-post-template";
import { HTMLContent } from "../components/Content";
import { Seo } from "../components/Seo";
import { IGatsbyImageData, getSrc } from "gatsby-plugin-image";

type SiteMetadataType = {
  siteUrl: string;
};

type FieldsType = {
  slug: string;
};

type FrontmatterType = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  featuredpost: boolean;
  featuredlink: string;
  featuredauthor:string;
  featuredimage: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  author: string;
  authorimage: {
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
    timeToRead: number;
    excerpt: string;
    id: string;
    fields: FieldsType;
    frontmatter: FrontmatterType;
  };
};

const BlogPost = ({ data }: PageProps<DataType>) => {
  const { markdownRemark: post } = data;
  const readingTime = `${post.timeToRead} min read`;

  return (
    <Layout>
      <Head
        siteMetadata={data.site.siteMetadata}
        fields={post.fields}
        frontmatter={post.frontmatter}
      />
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        author={post.frontmatter.author}
        authorimage={post.frontmatter.authorimage}
        date={post.frontmatter.date}
        imageCreator={post.frontmatter.featuredauthor}
        imageLink={post.frontmatter.featuredlink}
        image={post.frontmatter.featuredimage}
        slug={post.fields.slug}
        readingTime={readingTime}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

interface HeadProps {
  siteMetadata: SiteMetadataType;
  fields: FieldsType;
  frontmatter: FrontmatterType;
}

const Head = ({ siteMetadata, fields, frontmatter }: HeadProps) => {
  return (
    <Seo
      title={frontmatter.title}
      description={frontmatter.description}
      url={`${siteMetadata.siteUrl}${fields.slug}`}
    >
      <meta
        name="image"
        content={`${siteMetadata.siteUrl}${getSrc(frontmatter.featuredimage)}`}
      />
      <meta property="og:image:alt" content={frontmatter.title} />
      <meta
        property="og:image"
        content={`${siteMetadata.siteUrl}${getSrc(frontmatter.featuredimage)}`}
      />
    </Seo>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredauthor
        featuredlink
        featuredimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        author
        authorimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
