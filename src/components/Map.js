import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">HACNIC</h3>
          <PText>
            HACNIC CLUB, MLRIT, Dundigal Police Station Road, Hyderabad -
            500043,Telangana, India.
          </PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/MLR+Institute+of+Technology/@17.600525,78.4337692,15.85z/data=!4m15!1m8!3m7!1s0x30acd89aaa8239cd:0x6e65fa00001dd59f!2sGEC+More,+Chittagong,+Bangladesh!3b1!8m2!3d22.3590715!4d91.8215486!16s%2Fg%2F11clt6w20q!3m5!1s0x3bcb9b8eae5cd739:0x2aa927e931d97eee!8m2!3d17.5944451!4d78.4411892!16s%2Fm%2F09gd180?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
