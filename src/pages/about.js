import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { AboutHeader } from '../components/globals/header/Header';
import Banner from '../components/globals/banner/Banner';

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <AboutHeader>
      <Banner title="About Us" subtitle="A little about us" />
    </AboutHeader>
  </Layout>
);

export default AboutPage;
