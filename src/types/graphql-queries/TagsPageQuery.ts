type SiteMetadataType = {
    siteUrl: string;
};

export type GroupType = {
    fieldValue: string;
    totalCount: number;
};

export type TagsPageQuery = {
    site: {
        siteMetadata: SiteMetadataType;
    };
    allMarkdownRemark: {
        group: GroupType[];
    };
};