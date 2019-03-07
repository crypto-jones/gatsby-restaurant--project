import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../../sass/main.scss';

const GET_SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img2: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    img3: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Gallery = () => {
  return (
    <StaticQuery
      query={GET_SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid;
        const img2 = data.img2.childImageSharp.fluid;
        const img3 = data.img3.childImageSharp.fluid;

        return (
          <section className="section">
            <div className="gallery-wrapper">
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info">awesome pizza</p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">awesome pork</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">awesome steak</p>
              </div>
            </div>
          </section>
        );
      }}
    />
  );
};

export default Gallery;
