import React, { useEffect } from 'react';

import { FiMapPin, FiSunrise, FiMap, FiPlusCircle } from 'react-icons/fi';
import api from '../../services/api';

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
  useEffect(() => {
    api
      .get(
        `?q=${'Aveiro,pt'}&units=metric&appid=${'25059393c253e6364173550fdcd1fc10'}`,
      )
      .then(response => {
        console.log(response.data);
      });
  }, []);
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
        <h2>Coimbra, Portugal</h2>
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
        <h2>Porto, Portugal</h2>
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
