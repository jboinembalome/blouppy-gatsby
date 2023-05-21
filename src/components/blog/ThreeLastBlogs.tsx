import React from "react";
import { Card, CardImage, CardContent } from "../card";
import { useThreeLastBlogs } from "../../hooks/useThreeLastBlogs";

export const ThreeLastBlogs = () => {
  const blogs = useThreeLastBlogs();

  return (
    <div className="mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
      {blogs &&
        blogs.map(({ node: blog }) => (
          <Card key={blog.id} link={blog.fields.slug} className="rounded-2xl bg-white dark:bg-gray-900 shadow flex flex-col overflow-hidden transition ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
          <CardImage image={blog.frontmatter.featuredimage}  alt={`blog image thumbnail for post ${blog.frontmatter.title}`} containerClassName="flex-shrink-0" className="rounded-t-lg relative z-0" />
          <CardContent title={blog.frontmatter.title} description={blog.excerpt} date={blog.frontmatter.date} readingTime={`${blog.timeToRead} min read`} category={blog.frontmatter.category} categoryColor={blog.frontmatter.categorycolor} author={blog.frontmatter.author} authorimage={blog.frontmatter.authorimage} className="flex-1 dark:bg-gray-900 p-6 flex flex-col justify-between"/>
        </Card>
        ))}
    </div>
  );
};


