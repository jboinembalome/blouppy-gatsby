import { GatsbyNode } from "gatsby";
import { resolve } from "path";
import _ from "lodash";
import { createFilePath } from "gatsby-source-filesystem";

const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const { paginate } = require("gatsby-awesome-pagination");

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;
  const allMarkdown: {
    errors?: any;
    data?: {
      allMarkdownRemark: {
        edges: {
          node: {
            id: any;
            fields: { slug?: string };
            frontmatter: { tags?: any[]; templateKey: string };
          };
        }[];
      };
    };
  } = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    allMarkdown.errors.forEach((e: any) => console.error(e.toString()));
    return Promise.reject(allMarkdown.errors);
  }

  const posts = allMarkdown.data?.allMarkdownRemark?.edges;

  posts?.forEach((edge) => {
    const id = edge.node.id;
    if (edge.node.fields.slug)
      createPage({
        path: edge.node.fields.slug,
        component: resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
  });

  // Blog list pages with pagination
  const pathPrefix = ({ pageNumber, numberOfPages }: any) =>
    pageNumber === 0 ? "/blog" : "/blog/page";
  const blogPosts = posts?.filter(
    (edge) => edge.node.frontmatter.templateKey == "blog-post"
  );

  paginate({
    createPage, // The Gatsby `createPage` function
    items: blogPosts, // An array of objects to paginate
    itemsPerPage: 5, // How many items you want per page
    pathPrefix: pathPrefix, // Creates pages like `/blog`, `/blog/page/2`, etc
    component: resolve("./src/templates/blog-list.tsx"),
  });

  // Tag pages:
  let tags: any[] = [];

  // Iterate through each post, putting all found tags into `tags`
  posts?.forEach((edge) => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  // Eliminate duplicate tags
  tags = _.uniq(tags);

  // Make tag pages
  tags.forEach((tag) => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`;

    createPage({
      path: tagPath,
      component: resolve(`src/templates/tags.tsx`),
      context: {
        tag,
      },
    });
  });
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
