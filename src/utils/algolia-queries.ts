import escapeStringRegexp from "escape-string-regexp";
import { PageProps } from "gatsby";

const pagePath = `src/pages/blog`;
const indexName = `Pages`;

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

type NodeType = {
  id: string;
  frontmatter: {
    title: string;
  };
  fields: {
    slug: string;
  };
  excerpt: string;
};

type EdgeType = {
  node: NodeType;
};

type DataType = {
  pages: {
    edges: EdgeType[];
  };
};

function pageToAlgoliaRecord({
  node: { id, frontmatter, fields, ...rest },
}: EdgeType) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }: PageProps<DataType>) =>
      data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
