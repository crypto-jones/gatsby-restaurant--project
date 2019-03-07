import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { MenuHeader } from '../components/globals/header/Header';

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MenuHeader />
  </Layout>
);

export default MenuPage;
