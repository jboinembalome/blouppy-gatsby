import { ImageQuery } from "./ImageQuery";

export type HomePageQuery = {
    markdownRemark: {
        frontmatter: {
            title: string;
            image: ImageQuery;
            heading: string;
            subheading: string;
            mainpitch: {
                title: string;
                description: string;
            };
        }
    };
};