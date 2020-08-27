import React, { useEffect, useState, FormEvent, useCallback } from 'react';

import { FiMapPin, FiSunrise, FiMap, FiPlusCircle } from 'react-icons/fi';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  Suggestion,
} from 'use-places-autocomplete';
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

  const [cities, setCities] = useState<CurrentCityInfoProps[]>([]);

  const {
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({ requestOptions: {}, debounce: 300 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location => {
      const { latitude, longitude } = location.coords;
      api
        .get<CurrentCityInfoProps>(
          `?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_OWA_API_KEY}`,
        )
        .then(response => {
          console.log(response.data);

          setCurrentCityInfo(response.data);
        });
    });
  }, []);

  const handleSelectNewLocation = useCallback(
    (description: Suggestion) => {
      setValue(description.description, false);
      clearSuggestions();

      getGeocode({ address: description.place_id })
        .then(results => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log('📍 Coordinates: ', { lat, lng });
        })
        .catch(err => {
          console.log('Error: ', err);
        });
    },
    [clearSuggestions, setValue],
  );

  function handleAddNewLocation(e: FormEvent): void {
    e.preventDefault();
    console.log(cities);
    // Chamada à API para receber info da cidade
    api
      .get(
        `?q=${value}&units=metric&appid=${process.env.REACT_APP_OWA_API_KEY}`,
      )
      .then(response => {
        console.log(response.data);
        // Add ao array de cidades
        setCities([...cities, response.data]);
      });
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
            <input
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </InputNewLocation>

          <button type="submit">
            <FiPlusCircle size={28} color="#dcc02b" />
          </button>
        </NewLocation>
        {status === 'OK' &&
          data.map((suggestion, i) => {
            const {
              id,
              structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
              <ul key={String(i)}>
                <li onClick={() => handleSelectNewLocation(suggestion)}>
                  <strong>{main_text}, </strong>
                  <small>{secondary_text}</small>
                </li>
              </ul>
            );
          })}
      </form>

      {cities &&
        cities.map(city => (
          <LocationInfoContainer key={city.name}>
            <h2>
              {city.name}, {city.sys.country}
            </h2>

            <IconAndTemperatureInfo>
              {/* <FiSunrise size={56} /> */}
              <img
                src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                width="85"
                alt=""
              />
              <h1>{parseInt(String(city.main.temp), 10)}ºC</h1>
            </IconAndTemperatureInfo>
            <DescriptionAndTemperature>
              <p>{city.weather[0].main}</p>
              <span>
                {parseInt(String(city.main.temp_min), 10)}ºC -{' '}
                {parseInt(String(city.main.temp_max), 10)}ºC
              </span>
            </DescriptionAndTemperature>
          </LocationInfoContainer>
        ))}
    </Container>
  );
};

export default Home;
