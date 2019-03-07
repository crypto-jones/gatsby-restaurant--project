import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeHeader } from '../components/globals/header/Header';
import Banner from '../components/globals/banner/Banner';
import QuickInfo from '../components/HomePage/QuickInfo';
import Gallery from '../components/HomePage/Gallery';
import Menu from '../components/HomePage/Menu';
import '../sass/main.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader>
      <Banner title="eatery" subtitle="55 Main Street — Santa Monica, CA">
        <button className="button button__banner">menu</button>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
);

export default IndexPage;
