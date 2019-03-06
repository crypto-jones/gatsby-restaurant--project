import React from 'react';
import { FaBeer } from 'react-icons/fa';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello from Gatsby!</h3>
    <h3>
      Let's go for a <FaBeer />
    </h3>
  </Layout>
);

export default IndexPage;
