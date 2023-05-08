import React from "react";
import { Seo } from "../../components/Seo";
import { PageProps, graphql } from "gatsby";
import { Layout } from '../../components/layout';
import { TagsPageQuery } from "../../types/graphql-queries";
import { TagWithCount } from "../../components/tag";

const TagsPage = ({ data }: PageProps<TagsPageQuery>) => {
  const { allMarkdownRemark: { group } } = data;

  return (
    <Layout>
      <Head siteUrl={data.site.siteMetadata.siteUrl} />
      <div className="max-w-prose mx-auto">
        <div className="text-lg max-w-prose mx-auto">
          <h1 className="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Tags
          </h1>

          <ul className="mt-8 flex flex-wrap gap-2">
            {group.map((tag) => (
              <li key={tag.fieldValue}>
                <TagWithCount tag={tag} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

interface HeadProps {
  siteUrl: string;
}

const Head = ({ siteUrl }: HeadProps) => (
  <Seo
    title="Tags"
    description="List of tags for all articles."
    url={`${siteUrl}/tags`}
  />
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsPage {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
