import React, { useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import getFormattedTemperatures from '../../utils/getFormattedTemperatures';

import {
  Container,
  IconAndTemperatureInfo,
  DescriptionAndTemperature,
} from './styles';
import { showNextDaysForecastRequest } from '../../store/modules/nextDaysForecast/actions';

interface CurrentCityInfoProps {
  main: { temp: number; temp_max: number; temp_min: number };
  name: string;
  sys: { country: string; sunrise: number; sunset: number };
  weather: Array<{ description: string; icon: string; main: string }>;
}

interface InfoContainerProps {
  data: CurrentCityInfoProps;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ data }) => {
  const dispatch = useDispatch();

  const currentTempFormated = useMemo(() => {
    if (data) {
      return getFormattedTemperatures(data.main.temp);
    }

    return 0; // shouldnt get here!
  }, [data]);

  const minTempFormatted = useMemo(() => {
    if (data) {
      return getFormattedTemperatures(data.main.temp_min);
    }
    return 0; // shouldn't get here
  }, [data]);

  const maxTempFormatted = useMemo(() => {
    if (data) {
      return getFormattedTemperatures(data.main.temp_max);
    }
    return 0; // shouldn't get here
  }, [data]);

  const handleShowDetailedInfo = useCallback(() => {
    dispatch(showNextDaysForecastRequest(data.name));
  }, [data, dispatch]);

  return (
    <Container onClick={handleShowDetailedInfo}>
      <h2>
        {data.name}, {data.sys.country}
      </h2>

      <IconAndTemperatureInfo>
        {/* <FiSunrise size={56} /> */}
        <img
          src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          width="85"
          alt=""
        />
        <h1>{currentTempFormated}ºC</h1>
      </IconAndTemperatureInfo>
      <DescriptionAndTemperature>
        <p>{data.weather[0].main}</p>
        <span>
          {minTempFormatted}ºC - {maxTempFormatted}ºC
        </span>
      </DescriptionAndTemperature>
    </Container>
  );
};

export default InfoContainer;
