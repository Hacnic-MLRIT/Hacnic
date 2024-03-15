import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What do you learn" heading="Insights" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="CTF's"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Bug Bounty"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Secure Coding"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
