import React from "react";
import { PageProps, graphql } from "gatsby";
import { Layout } from '../components/layout';
import { BlogPostTemplate } from "./blog-post-template";
import { Seo } from "../components/Seo";
import { ImageDataLike, getSrc } from "gatsby-plugin-image";
import { BlogPostQuery } from "../types/graphql-queries";

const BlogPost = ({ data }: PageProps<BlogPostQuery>) => {
  const { markdownRemark: post } = data;
  const readingTime = `${post.timeToRead} min read`;

  return (
    <Layout>
      <Head
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        slug={post.fields.slug}
        siteUrl={data.site.siteMetadata.siteUrl}
        featuredimage={post.frontmatter.featuredimage}
      />
      <BlogPostTemplate
        content={post.html}
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
  title: string;
  description: string;
  slug: string;
  siteUrl: string;
  featuredimage: ImageDataLike;
}

const Head = ({ title, description, slug, siteUrl, featuredimage }: HeadProps) => {
  return (
    <Seo
      title={title}
      description={description}
      url={`${siteUrl}${slug}`}
    >
      <meta
        name="image"
        content={`${siteUrl}${getSrc(featuredimage)}`}
      />
      <meta property="og:image:alt" content={title} />
      <meta
        property="og:image"
        content={`${siteUrl}${getSrc(featuredimage)}`}
      />
    </Seo>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPost($id: String!) {
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
