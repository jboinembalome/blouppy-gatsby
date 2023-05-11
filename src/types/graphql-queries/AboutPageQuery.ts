import { ImageQuery } from "./ImageQuery";

type AuthorType = {
    name: string;
  };
  
  type SiteMetadataType = {
    author: AuthorType;
    siteUrl: string;
  };
  
  type FrontmatterType = {
    title: string;
    description: string;
    aboutimage: ImageQuery;
  };

export type AboutPageQuery = {
    site: {
        siteMetadata: SiteMetadataType;
    }
    markdownRemark: {
        html: string;
        frontmatter: FrontmatterType
    };
};