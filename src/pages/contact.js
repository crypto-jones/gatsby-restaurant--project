import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ContactHeader } from '../components/globals/header/Header';
import Banner from '../components/globals/banner/Banner';

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ContactHeader>
      <Banner title="contact us" subtitle="let's get in touch!" />
    </ContactHeader>
  </Layout>
);

export default ContactPage;
