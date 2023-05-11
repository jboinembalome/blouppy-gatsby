import { ImageQuery } from "./ImageQuery";

type FrontmatterType = {
  title: string;
  templateKey: string;
  date: string;
  category: string;
  categorycolor: string;
  featuredpost: boolean;
  featuredimage: ImageQuery;
  author: string;
  authorimage: ImageQuery;
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

export type ThreeLastBlogsQuery = {
  allMarkdownRemark: {
    edges: EdgeType[];
  };
};