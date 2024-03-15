import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh; /* Center vertically */
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;

    .about__info__heading {
      text-align: center;
      font-size: 3rem;
      height: auto; /* Reset height on smaller screens */
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <p className="about__info__heading">
            <span>Under construction</span>
          </p>
          <div className="about__info__items">
            <div className="about__info__item"> </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
