import React from "react";
import { Card, CardImage, CardContent } from "../card";
import { useThreeLastBlogs } from "../../hooks/useThreeLastBlogs";

export const ThreeLastBlogs = () => {
  const blogs = useThreeLastBlogs();

  return (
    <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {blogs &&
        blogs.map(({ node: blog }) => (
          <Card key={blog.id} className="rounded-2xl bg-white dark:bg-gray-800 shadow flex flex-col overflow-hidden">
          <CardImage link={blog.fields.slug} image={blog.frontmatter.featuredimage}  alt={`blog image thumbnail for post ${blog.frontmatter.title}`} containerClassName="flex-shrink-0" className="rounded-t-lg relative z-0" />
          <CardContent title={blog.frontmatter.title} description={blog.excerpt} date={blog.frontmatter.date} readingTime={`${blog.timeToRead} min read`} category={blog.frontmatter.category} categoryColor={blog.frontmatter.categorycolor} author={blog.frontmatter.author} authorimage={blog.frontmatter.authorimage} link={blog.fields.slug} className="flex-1 dark:bg-gray-800 p-6 flex flex-col justify-between"/>
        </Card>
        ))}
    </div>
  );
};


