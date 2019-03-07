import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import '../../sass/main.scss';
import Product from './Product';
import Title from './Title';

const PRODUCTS = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          id
          name
          price
          ingredients
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Menu = () => {
  return (
    <div className="section">
      <Title title="featured items" message="little taste" />
      <div className="product-list">
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            const products = data.items.edges;

            return products.map(item => {
              return <Product key={item.node.id} product={item.node} />;
            });
          }}
        />
      </div>
    </div>
  );
};

export default Menu;
