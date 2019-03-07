import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ContactHeader } from '../components/globals/header/Header';

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ContactHeader />
  </Layout>
);

export default ContactPage;
