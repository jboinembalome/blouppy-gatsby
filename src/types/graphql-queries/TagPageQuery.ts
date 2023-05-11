type SiteMetadataType = {
    siteUrl: string;
};

type FrontmatterType = {
    title: string;
};

type NodeType = {
    fields: {
        slug: string;
    };
    frontmatter: FrontmatterType;
};

type EdgeType = {
    node: NodeType;
};

export type TagPageQuery = {
    site: {
        siteMetadata: SiteMetadataType;
    };
    allMarkdownRemark: {
        totalCount: number;
        edges: EdgeType[];
    };
};