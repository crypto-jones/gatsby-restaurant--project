import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { MenuHeader } from '../components/globals/header/Header';
import Banner from '../components/globals/banner/Banner';

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MenuHeader>
      <Banner title="menu" subtitle="Let's dig in!" />
    </MenuHeader>
  </Layout>
);

export default MenuPage;
