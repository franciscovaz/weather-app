import React, { useEffect, useState, FormEvent, useCallback } from 'react';

import { FiMapPin, FiMap, FiPlusCircle, FiLoader } from 'react-icons/fi';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  Suggestion,
} from 'use-places-autocomplete';
import { useSelector } from 'react-redux';
import api from '../../services/api';

import {
  Container,
  LocationTitle,
  LoadingInfoContainer,
  NewLocation,
  InputNewLocation,
  SelectCityContainer,
  CitiesToSelect,
  DetailMainContainer,
  DetailedInformationWeatherContainer,
  HourInformation,
} from './styles';

import InfoContainer from '../../Components/InfoContainer';
import { ICurrentState, IState } from '../../store';
import { ICityResponse } from '../../store/modules/nextDaysForecast/types';
import getFormattedTemperatures from '../../utils/getFormattedTemperatures';
import getFormattedDay from '../../utils/getFormattedDay';

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

  const isNextDaysForecastOpen = useSelector<IState, boolean>(state => {
    return state.nextDaysForecast.isInfoCardOpen;
  });

  const nextDaysForecastInfo = useSelector<IState, ICityResponse[]>(
    state => state.nextDaysForecast.forecastInfo,
  );

  const currentInfo = useSelector<ICurrentState, ICityResponse>(
    state => state.currentCityForecast.cityInfo,
  );
  const currentName = useSelector<ICurrentState, string>(
    state => state.currentCityForecast.name,
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location => {
      const { latitude, longitude } = location.coords;
      api
        .get<CurrentCityInfoProps>(
          `/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=25059393c253e6364173550fdcd1fc10`,
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
      .get(
        `weather/?q=${value}&units=metric&appid=25059393c253e6364173550fdcd1fc10`,
      )
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

      {isNextDaysForecastOpen && (
        <DetailMainContainer>
          <span>{currentName}</span>

          <DetailedInformationWeatherContainer>
            {isNextDaysForecastOpen &&
              nextDaysForecastInfo &&
              nextDaysForecastInfo.map(day => (
                <HourInformation key={day.dt_txt}>
                  <span>{getFormattedDay(day.dt_txt)}</span>
                  <img
                    src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                    alt="Sun"
                  />
                  <span>{getFormattedTemperatures(day.main.temp)}ºC</span>
                </HourInformation>
              ))}
          </DetailedInformationWeatherContainer>
        </DetailMainContainer>
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
        cities.map(city => (
          <InfoContainer key={city.sys.country} data={city} />
        ))}
    </Container>
  );
};

export default Home;
