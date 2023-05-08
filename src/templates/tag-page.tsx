import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { Layout } from '../components/layout';
import { kebabCase } from "lodash";
import { Seo } from "../components/seo/Seo";
import { ButtonInternalLink } from "../components/button";
import { TagPageQuery } from "../types/graphql-queries";

const TagPage = ({ data, pageContext }: PageProps<TagPageQuery>) => {
  const posts = data.allMarkdownRemark.edges;
  const postLinks = posts.map((post) => (
    <li key={post.node.fields.slug} className="px-4 py-4 sm:px-0">
      <Link to={post.node.fields.slug}>
        <h2 className="is-size-2 text-2xl leading-9 font-medium text-gray-900 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400">
          {post.node.frontmatter.title}
        </h2>
      </Link>
    </li>
  ));
  const tag = (pageContext as any).tag;
  const totalCount = data.allMarkdownRemark.totalCount;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with`;

  return (
    <Layout>
      <Head tag={tag} siteUrl={data.site.siteMetadata.siteUrl} />

      <div className="text-gray-500 dark:text-gray-400 mx-auto">
        <div className="text-lg max-w-prose mx-auto">
          <h1 className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            {tagHeader}{" "}
            <span className="text-violet-600 dark:text-violet-400">
              {tag}
            </span>
          </h1>
          <ul className="mt-8 divide-y divide-gray-200">{postLinks}</ul>
          <ButtonInternalLink link="/tags/" text="Browse all tags" className="mt-2 mx-auto" />
        </div>
      </div>
    </Layout>
  );
};

interface HeadProps {
  tag: string;
  siteUrl: string;
}

const Head = ({ tag, siteUrl }: HeadProps) => {
  const description = `Article(s) tagged with ${tag}`;
  const url = `${siteUrl}/tags/${kebabCase(tag)}`;

  return <Seo title={tag} description={description} url={url} />;
};

export default TagPage;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
