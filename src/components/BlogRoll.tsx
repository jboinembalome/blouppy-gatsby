import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import ArticleInformation from "./ArticleInformation";
import { IGatsbyImageData } from "gatsby-plugin-image";

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

interface CardImageProps {
  post: NodeType;
}

const CardImage = ({ post }: CardImageProps) => {
  return (
    <Link className="flex-shrink-0" to={post.fields.slug}>
      <div className="relative">
        {post.frontmatter.featuredimage ? (
          <PreviewCompatibleImage
            className="rounded-t-lg relative z-0"
            imageInfo={{
              image: post.frontmatter.featuredimage,
              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
            }}
          />
        ) : (
          <div className="h-64 w-64" />
        )}
      </div>
    </Link>
  );
};

interface CardContentProps {
  post: NodeType;
}

const CardContent = ({ post }: CardContentProps) => {
  const readingTime = `${post.timeToRead} min read`;

  return (
    <div className="flex-1 dark:bg-gray-800 p-6 flex flex-col justify-between">
      <div className="flex-1">
        <span
          className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${post.frontmatter.categorycolor}`}
        >
          {post.frontmatter.category}
        </span>
        <div className="block mt-2">
          <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {post.frontmatter.title}
          </p>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
            {post.excerpt}
          </p>
        </div>
        <div className="flex justify-end">
          <Link className="btn-white-sm mt-6" to={post.fields.slug}>
            Continue Reading
          </Link>
        </div>
      </div>

      <ArticleInformation
        author={post.frontmatter.author}
        authorimage={post.frontmatter.authorimage}
        date={post.frontmatter.date}
        readingTime={readingTime}
      />
    </div>
  );
};

interface BlogRollProps {
  data: DataType;
}

const BlogRoll = ({ data }: BlogRollProps) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {posts &&
        posts.map(({ node: post }) => (
          <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            key={post.id}
          >
            <CardImage post={post} />
            <CardContent post={post} />
          </div>
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
