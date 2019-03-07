import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../../sass/main.scss';

const Gallery = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.img1.childImageSharp.fluid} />}
    />
  );
};

export default Gallery;
