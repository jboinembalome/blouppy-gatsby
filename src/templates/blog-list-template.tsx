import React from 'react'
import { Link } from 'gatsby'
import ArticleInformation from '../components/ArticleInformation'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type SiteMetadataType = {
  siteUrl: string;
};

type FrontmatterType = {
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

type NodeType = {
  timeToRead: number;
  excerpt: string;
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: FrontmatterType;
};

type EdgeType = {
  node: NodeType;
};

type DataType = {
  site: {
    siteMetadata: SiteMetadataType;
  }
  allMarkdownRemark: {
    edges: EdgeType[];
  };
};

interface CardImageProps {
  post: NodeType;
}


const CardImage = ({ post }: CardImageProps) => {
  return <Link className="relative h-full" to={post.fields.slug}>
    <div className="relative h-full rounded-t-lg md:rounded-none md:rounded-l-lg overflow-hidden">
      {post.frontmatter.featuredimage ? (
        <PreviewCompatibleImage className="inset-0 h-full w-full rounded-t-lg md:rounded-none md:rounded-l-lg object-cover relative z-0"
          imageInfo={{
            image: post.frontmatter.featuredimage,
            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
          }}
        />
      ) : <div className="w-64" />}
    </div>
  </Link>;
}

interface CardContentProps {
  post: NodeType;
}

const CardContent = ({ post }: CardContentProps) => {
  const readingTime = `${post.timeToRead} min read`

  return <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 md:px-0">
    <div className="flex-1 pt-6 pr-6 flex flex-col justify-between">
      <div className="flex-1">
        <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${post.frontmatter.categorycolor}`}>
          {post.frontmatter.category}
        </span>
        <div className="block mt-2">
          <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{post.frontmatter.title}</p>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{post.excerpt}</p>
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
        readingTime={readingTime} />
    </div>
  </div>
    ;
}

interface BlogListTemplateProps {
  data: DataType;
}

export const BlogListTemplate = ({ data }: BlogListTemplateProps) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className="mx-auto">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="relative bg-white dark:bg-gray-900 py-4" key={post.id}>
            <div className="rounded-2xl bg-white dark:bg-gray-800 shadow md:mx-auto md:max-w-7xl md:grid md:grid-cols-2 md:gap-24 md:items-start">
              <CardImage post={post} />
              <CardContent post={post} />
            </div>
          </div>
        ))}
    </div>

  )
}