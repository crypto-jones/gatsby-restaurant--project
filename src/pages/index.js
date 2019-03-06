import React from 'react';
// import { Link } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello from Gatsby!</h3>
  </Layout>
);

export default IndexPage;
