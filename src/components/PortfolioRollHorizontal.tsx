import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Card, CardContent, CardImage } from "./card";

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
    link: string;
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

interface PortfolioRollHorizontalProps {
  data: DataType;
}
const PortfolioRollHorizontal = ({ data }: PortfolioRollHorizontalProps) => {
  const { edges: projects } = data.allMarkdownRemark;

  return (
    <section className="mt-8 mx-auto flex flex-col gap-y-8">
      {projects && projects.map(({ node: project }) => (
        <Card key={project.id} className="rounded-2xl bg-white dark:bg-gray-800 shadow md:mx-auto md:max-w-7xl md:grid md:grid-cols-2 md:gap-12 md:items-start">
          <CardImage link={project.fields.slug} image={project.frontmatter.featuredimage}  alt={`project image thumbnail for post ${project.frontmatter.title}`} containerClassName="relative h-full" className="absolute inset-0 h-full w-full rounded-t-lg md:rounded-none md:rounded-l-lg object-cover z-0" />
          <CardContent title={project.frontmatter.title} description={project.excerpt} date={project.frontmatter.date} readingTime={`${project.timeToRead} min read`} link={project.fields.slug} sourceCodeLink={project.frontmatter.link} category={project.frontmatter.category} categoryColor={project.frontmatter.categorycolor} author={project.frontmatter.author} authorimage={project.frontmatter.authorimage} className="relative mx-auto max-w-md p-6 sm:max-w-3xl" />
        </Card>
      ))}
    </section>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioRollHorizontalQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { templateKey: { eq: "portfolio-post" } } }
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
                link
              }
            }
          }
        }
      }
    `}
    render={(data) => <PortfolioRollHorizontal data={data} />}
  />
);
