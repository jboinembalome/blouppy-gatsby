import React from 'react'
import { Card, CardImage, CardContent } from '../components/card'
import { DataType } from './blog-list';

interface BlogListTemplateProps {
  data: DataType;
}

export const BlogListTemplate = ({ data }: BlogListTemplateProps) => {
  const { edges: blogs } = data.allMarkdownRemark;

  return (
    <section className="mt-8 mx-auto flex flex-col gap-y-8">
      {blogs && blogs.map(({ node: blog }) => (
          <Card key={blog.id} className="rounded-2xl bg-white dark:bg-gray-800 shadow md:mx-auto md:max-w-7xl md:grid md:grid-cols-2 md:gap-12 md:items-start">
            <CardImage link={blog.fields.slug} image={blog.frontmatter.featuredimage}  alt={`blog image thumbnail for post ${blog.frontmatter.title}`} containerClassName="relative h-full" className="absolute inset-0 h-full w-full rounded-t-lg md:rounded-none md:rounded-l-lg object-cover z-0" />
            <CardContent title={blog.frontmatter.title} description={blog.excerpt} date={blog.frontmatter.date} readingTime={`${blog.timeToRead} min read`} category={blog.frontmatter.category} categoryColor={blog.frontmatter.categorycolor} author={blog.frontmatter.author} authorimage={blog.frontmatter.authorimage} className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 md:px-0" />
          </Card>
        ))}
    </section>
  )
}