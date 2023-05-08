type AuthorType = {
    name: string;
    summary: string;
};

type SocialType = {
    twitter: string;
    twitterUrl: string;
    linkedinUrl: string;
    githubUrl: string;
};

type SiteMetadataType = {
    title: string;
    author: AuthorType;
    description: string;
    siteUrl: string;
    canonicalUrl: string;
    social: SocialType;
};

export type SiteMetadataQuery = {
    site: {
        siteMetadata: SiteMetadataType;
    };
};