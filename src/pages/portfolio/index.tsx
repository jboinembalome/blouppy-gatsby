import React from "react";
import { Layout } from '../../components/layout';
import { Seo } from "../../components/Seo";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { Banner } from "../../components/banner";
import { Card, CardImage, CardContent } from "../../components/card";
import { PageProps, graphql } from "gatsby";
import { PortfolioPageQuery } from "../../types/graphql-queries";

interface ProjectListProps {
  data: PortfolioPageQuery;
}

const ProjectList = ({ data }: ProjectListProps) => {
  const projects = data.allMarkdownRemark.edges;
  return (
    <section className="mt-8 mx-auto flex flex-col gap-y-8">
      {projects && projects.map(({ node: project }) => (
        <Card key={project.id} className="rounded-2xl bg-white dark:bg-gray-800 shadow md:mx-auto md:max-w-7xl md:grid md:grid-cols-2 md:gap-12 md:items-start">
          <CardImage link={project.fields.slug} image={project.frontmatter.featuredimage} alt={`project image thumbnail for post ${project.frontmatter.title}`} containerClassName="relative h-full" className="absolute inset-0 h-full w-full rounded-t-lg md:rounded-none md:rounded-l-lg object-cover z-0" />
          <CardContent title={project.frontmatter.title} description={project.excerpt} date={project.frontmatter.date} readingTime={`${project.timeToRead} min read`} link={project.fields.slug} sourceCodeLink={project.frontmatter.link} category={project.frontmatter.category} categoryColor={project.frontmatter.categorycolor} author={project.frontmatter.author} authorimage={project.frontmatter.authorimage} className="relative mx-auto max-w-md p-6 sm:max-w-3xl" />
        </Card>
      ))}
    </section>
  )
};

const Head = () => {
  const { siteUrl } = useSiteMetadata();
  const description = "Personnal projects of Jimmy Boinembalome developed with love";
  return <Seo title="Portfolio" description={description} url={`${siteUrl}/portfolio`} />
};

const PortfolioPage = ({ data }: PageProps<PortfolioPageQuery>) => {
  const bannerTitle = "Portfolio";
  const bannerSubtitle = "Some projects I am happy to share with you 👍";

  return (
    <Layout>
      <Head />
      <Banner title={bannerTitle} subtitle={bannerSubtitle} className="bg-rose-300 dark:bg-indigo-400 rounded-lg shadow-xl overflow-hidden" />
      <ProjectList data={data} />
    </Layout>
  );
};

export default PortfolioPage;

export const pageQuery = graphql`
  query PortfolioPage {
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
`
