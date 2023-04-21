import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Card, CardImage, CardContent } from "./card";

type NodeType = {
  timeToRead: number;
  excerpt: string;
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    templateKey: string;
    date: string;
    category: string;
    categorycolor: string;
    featuredpost: boolean;
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
};

type EdgeType = {
  node: NodeType;
};

type DataType = {
  allMarkdownRemark: {
    edges: EdgeType[];
  };
};

interface BlogRollProps {
  data: DataType;
}

const BlogRoll = ({ data }: BlogRollProps) => {
  const { edges: blogs } = data.allMarkdownRemark;

  return (
    <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {blogs &&
        blogs.map(({ node: blog }) => (
          <Card key={blog.id} className="rounded-2xl bg-white dark:bg-gray-800 shadow flex flex-col overflow-hidden">
          <CardImage link={blog.fields.slug} image={blog.frontmatter.featuredimage}  alt={`blog image thumbnail for post ${blog.frontmatter.title}`} containerClassName="flex-shrink-0" className="rounded-t-lg relative z-0" />
          <CardContent title={blog.frontmatter.title} description={blog.excerpt} date={blog.frontmatter.date} readingTime={`${blog.timeToRead} min read`} category={blog.frontmatter.category} categoryColor={blog.frontmatter.categorycolor} author={blog.frontmatter.author} authorimage={blog.frontmatter.authorimage} className="flex-1 dark:bg-gray-800 p-6 flex flex-col justify-between"/>
        </Card>
        ))}
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          limit: 3
        ) {
          edges {
            node {
              timeToRead
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                category
                categorycolor
                featuredpost
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
        }
      }
    `}
    render={(data: DataType) => <BlogRoll data={data} />}
  />
);
