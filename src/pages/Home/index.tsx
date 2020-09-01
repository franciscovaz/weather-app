import React, { useEffect, useState, FormEvent, useCallback } from 'react';

import { FiMapPin, FiMap, FiPlusCircle, FiLoader } from 'react-icons/fi';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  Suggestion,
} from 'use-places-autocomplete';
import api from '../../services/api';

import {
  Container,
  LocationTitle,
  LoadingInfoContainer,
  NewLocation,
  InputNewLocation,
  SelectCityContainer,
  CitiesToSelect,
} from './styles';

import InfoContainer from '../../Components/InfoContainer';

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
  const [citiesLoading, setCitiesLoading] = useState(true);

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
          `?lat=${latitude}&lon=${longitude}&units=metric&appid=25059393c253e6364173550fdcd1fc10`,
        )
        .then(response => {
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
          // console.log('📍 Coordinates: ', { lat, lng });
        })
        .catch(err => {
          // console.log('Error: ', err);
        });
    },
    [clearSuggestions, setValue],
  );

  function handleAddNewLocation(e: FormEvent): void {
    e.preventDefault();
    // Chamada à API para receber info da cidade
    api
      .get(`?q=${value}&units=metric&appid=25059393c253e6364173550fdcd1fc10`)
      .then(response => {
        // Add ao array de cidades
        setCities([response.data, ...cities]);
        setCitiesLoading(false);
      });

    setValue('');
  }

  return (
    <Container>
      <LocationTitle>
        <FiMapPin size={20} color="#dcc02b" />
        <h1>Current Location</h1>
      </LocationTitle>

      {!currentCityInfo ? (
        <LoadingInfoContainer loading={!!JSON.stringify(currentCityInfo)}>
          <span>
            <FiLoader size={24} />
          </span>
        </LoadingInfoContainer>
      ) : (
        <InfoContainer data={currentCityInfo} />
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
              placeholder="search new location"
              onChange={e => setValue(e.target.value)}
            />
          </InputNewLocation>

          <button type="submit">
            <FiPlusCircle size={28} color="#dcc02b" />
          </button>
        </NewLocation>
        {status === 'OK' && (
          <SelectCityContainer>
            {status === 'OK' &&
              data.map((suggestion, i) => {
                const {
                  structured_formatting: { main_text, secondary_text },
                } = suggestion;

                return (
                  <CitiesToSelect key={String(i)}>
                    <ul>
                      <li>
                        <button
                          type="button"
                          onClick={() => handleSelectNewLocation(suggestion)}
                        >
                          <strong>{main_text}, </strong>
                          <small>{secondary_text}</small>
                        </button>
                      </li>
                    </ul>
                  </CitiesToSelect>
                );
              })}
          </SelectCityContainer>
        )}
      </form>

      {citiesLoading && (
        <LoadingInfoContainer>
          <span>No locations added</span>
        </LoadingInfoContainer>
      )}

      {cities &&
        cities.map(city => <InfoContainer key={city.name} data={city} />)}
    </Container>
  );
};

export default Home;
