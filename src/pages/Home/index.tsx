import React from 'react';

import { FiMapPin, FiSunrise } from 'react-icons/fi';

import {
  Container,
  LocationTitle,
  LocationInfoContainer,
  IconAndTemperatureInfo,
  DescriptionAndTemperature,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LocationTitle>
        <FiMapPin size={20} />
        <h1>Current Location</h1>
      </LocationTitle>

      <LocationInfoContainer>
        <h2>Gafanha de Aquém, Aveiro</h2>
        <IconAndTemperatureInfo>
          <FiSunrise size={56} />
          <h1>19ºC</h1>
        </IconAndTemperatureInfo>
        <DescriptionAndTemperature>
          <p>Sol</p>
          <span>11ºC - 26ºC</span>
        </DescriptionAndTemperature>
      </LocationInfoContainer>

      <LocationTitle>
        <FiMapPin size={20} />
        <h1>Day Detail</h1>
      </LocationTitle>

      <LocationInfoContainer />
    </Container>
  );
};

export default Home;
