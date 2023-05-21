import React from "react";
import { Seo } from "../../components/seo/Seo";
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
        <Card key={project.id} link={project.fields.slug} className="rounded-2xl bg-white dark:bg-gray-900 shadow md:mx-auto md:max-w-7xl md:grid md:grid-cols-2 md:gap-12 md:items-start transition ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
          <CardImage image={project.frontmatter.featuredimage} alt={`project image thumbnail for post ${project.frontmatter.title}`} containerClassName="relative h-full flex-shrink-0" className="inset-0 h-full w-full rounded-t-lg md:rounded-none md:rounded-l-lg object-cover z-0" />
          <CardContent title={project.frontmatter.title} description={project.excerpt} date={project.frontmatter.date} readingTime={`${project.timeToRead} min read`} category={project.frontmatter.category} categoryColor={project.frontmatter.categorycolor} author={project.frontmatter.author} authorimage={project.frontmatter.authorimage} className="relative h-full flex flex-col justify-between mx-auto max-w-md p-6 sm:max-w-3xl" />
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
  const bannerSubtitle = "Some projects I am happy to share with you 💻";

  return (
    <>
      <Head />
      <Banner title={bannerTitle} subtitle={bannerSubtitle} className="bg-accent-500/60 dark:bg-accent-300 text-gray-100 dark:text-gray-900  rounded-lg shadow-xl overflow-hidden" />
      <ProjectList data={data} />
    </>
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
