import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeHeader } from '../components/globals/header/Header';
import Banner from '../components/globals/banner/Banner';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader>
      <Banner title="eatery" subtitle="55 Main Street — Santa Monica, CA" />
    </HomeHeader>
  </Layout>
);

export default IndexPage;
