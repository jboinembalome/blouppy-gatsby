import { IGatsbyImageData } from "gatsby-plugin-image";

export type ImageQuery = {
    childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
    };
};;