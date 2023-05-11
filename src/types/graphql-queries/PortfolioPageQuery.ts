import { ImageQuery } from "./ImageQuery";

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
        featuredimage: ImageQuery;
        author: string;
        authorimage: ImageQuery;
        link: string;
    };
};

type EdgeType = {
    node: NodeType;
};

export type PortfolioPageQuery = {
    allMarkdownRemark: {
        edges: EdgeType[];
    };
};