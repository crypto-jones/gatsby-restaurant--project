import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeHeader } from '../components/globals/header/Header';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader />
  </Layout>
);

export default IndexPage;
