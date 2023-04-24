import React from "react";
import { Layout } from '../../components/layout';
import PortfolioRollHorizontal from "../../components/PortfolioRollHorizontal";
import { Seo } from "../../components/Seo";
import { useSiteMetadata } from "../../components/useSiteMetadata";
import { Banner } from "../../components/banner";

const Head = () => {
  const { siteUrl } = useSiteMetadata();
  const description = "Personnal projects of Jimmy Boinembalome developed with love";
  return <Seo title="Portfolio" description={description} url={`${siteUrl}/portfolio`} />
};

const PortfolioIndexPage = () => {
  const bannerTitle = "Portfolio";
  const bannerSubtitle = "Some projects I am happy to share with you 👍";

  return (
    <Layout>
      <Head />
      <Banner title={bannerTitle} subtitle={bannerSubtitle} className="bg-rose-300 dark:bg-indigo-400 rounded-lg shadow-xl overflow-hidden" />
      <PortfolioRollHorizontal />
    </Layout>
  );
};

export default PortfolioIndexPage;
