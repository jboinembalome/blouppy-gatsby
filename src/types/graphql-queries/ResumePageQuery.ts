import { ImageQuery } from "./ImageQuery";

type AuthorType = {
    name: string;
};

type SocialType = {
    twitterUrl: string;
    linkedinUrl: string;
    githubUrl: string;
};

type SiteMetadataType = {
    author: AuthorType;
    siteUrl: string;
    social: SocialType;
};

type FrontmatterType = {
    title: string;
    resumeimage: ImageQuery;
    job: string;
    technicalSkills: string[];
    softSkills: string[];
    englishResumeJB: string;
    frenchResumeJB: string;
};

export type ResumePageQuery = {
    site: {
        siteMetadata: SiteMetadataType;
    };
    markdownRemark: {
        html: string | TrustedHTML;
        frontmatter: FrontmatterType;
    };
};