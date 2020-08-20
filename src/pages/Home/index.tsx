import React from 'react';

import { FiMapPin, FiSunrise, FiMap, FiPlusCircle } from 'react-icons/fi';

import {
  Container,
  LocationTitle,
  LocationInfoContainer,
  IconAndTemperatureInfo,
  DescriptionAndTemperature,
  NewLocation,
  InputNewLocation,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LocationTitle>
        <FiMapPin size={20} color="#dcc02b" />
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
        <FiMapPin size={20} color="#dcc02b" />
        <h1>Day Detail</h1>
      </LocationTitle>

      <NewLocation>
        <InputNewLocation>
          <FiMap size={20} color="#dcc02b" />
          <input type="text" />
        </InputNewLocation>

        <FiPlusCircle size={28} color="#dcc02b" />
      </NewLocation>

      <LocationInfoContainer>
        <h2>Ilhavo, Aveiro</h2>
        <IconAndTemperatureInfo>
          <FiSunrise size={56} />
          <h1>15ºC</h1>
        </IconAndTemperatureInfo>
        <DescriptionAndTemperature>
          <p>Nublado</p>
          <span>11ºC - 26ºC</span>
        </DescriptionAndTemperature>
      </LocationInfoContainer>

      <LocationInfoContainer>
        <h2>Coimbra</h2>
        <IconAndTemperatureInfo>
          <FiSunrise size={56} />
          <h1>21ºC</h1>
        </IconAndTemperatureInfo>
        <DescriptionAndTemperature>
          <p>Sol</p>
          <span>11ºC - 26ºC</span>
        </DescriptionAndTemperature>
      </LocationInfoContainer>

      <LocationInfoContainer>
        <h2>Portugal</h2>
        <IconAndTemperatureInfo>
          <FiSunrise size={56} />
          <h1>25ºC</h1>
        </IconAndTemperatureInfo>
        <DescriptionAndTemperature>
          <p>Cenas de Sol e Nublado</p>
          <span>7ºC - 33ºC</span>
        </DescriptionAndTemperature>
      </LocationInfoContainer>
    </Container>
  );
};

export default Home;
