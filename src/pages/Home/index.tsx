import React, { useEffect, useState, FormEvent } from 'react';

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

interface CurrentCityInfoProps {
  main: { temp: number; temp_max: number; temp_min: number };
  name: string;
  sys: { country: string; sunrise: number; sunset: number };
  weather: Array<{ description: string; icon: string; main: string }>;
}

const Home: React.FC = () => {
  /* const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]); */
  const [
    currentCityInfo,
    setCurrentCityInfo,
  ] = useState<CurrentCityInfoProps | null>(null);
  const [newLocation, setNewLocation] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location => {
      const { latitude, longitude } = location.coords;

      api
        .get<CurrentCityInfoProps>(
          `?lat=${latitude}&lon=${longitude}&units=metric&appid=${'25059393c253e6364173550fdcd1fc10'}`,
        )
        .then(response => {
          console.log(response.data);

          setCurrentCityInfo(response.data);
        });
    });
  }, []);

  function handleAddNewLocation(e: FormEvent): void {
    e.preventDefault();
    console.log(newLocation);
  }

  return (
    <Container>
      <LocationTitle>
        <FiMapPin size={20} color="#dcc02b" />
        <h1>Current Location</h1>
      </LocationTitle>

      {currentCityInfo && (
        <LocationInfoContainer>
          <h2>
            {currentCityInfo.name}, {currentCityInfo.sys.country}
          </h2>

          <IconAndTemperatureInfo>
            {/* <FiSunrise size={56} /> */}
            <img
              src={`http://openweathermap.org/img/w/${currentCityInfo.weather[0].icon}.png`}
              width="85"
              alt=""
            />
            <h1>{parseInt(String(currentCityInfo.main.temp), 10)}ºC</h1>
          </IconAndTemperatureInfo>
          <DescriptionAndTemperature>
            <p>{currentCityInfo.weather[0].main}</p>
            <span>
              {parseInt(String(currentCityInfo.main.temp_min), 10)}ºC -{' '}
              {parseInt(String(currentCityInfo.main.temp_max), 10)}ºC
            </span>
          </DescriptionAndTemperature>
        </LocationInfoContainer>
      )}

      <LocationTitle>
        <FiMapPin size={20} color="#dcc02b" />
        <h1>Other Locations</h1>
      </LocationTitle>

      <form onSubmit={handleAddNewLocation}>
        <NewLocation>
          <InputNewLocation>
            <FiMap size={20} color="#dcc02b" />
            <input type="text" onChange={e => setNewLocation(e.target.value)} />
          </InputNewLocation>

          <button type="submit">
            <FiPlusCircle size={28} color="#dcc02b" />
          </button>
        </NewLocation>
      </form>

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
