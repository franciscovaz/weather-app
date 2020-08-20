import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 500px;
`;

export const LocationTitle = styled.div`
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.5rem;
  }

  h1 {
    font-size: 2rem;
  }
`;

export const LocationInfoContainer = styled.div`
  background-color: #ffffff;
  border: 0;
  border-radius: 0.8rem;
  margin: 3.2rem;
  padding: 1.2rem;

  h2 {
    text-align: center;
    font: 700 1.6rem Archivo;
  }
`;

export const IconAndTemperatureInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2.5rem;

  svg {
    margin-right: 25%;
  }

  h1 {
    font-size: 5.6rem;
    color: #dcc02b;
  }
`;

export const DescriptionAndTemperature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  p {
    font-size: 2.7rem;
    color: #dcc02b;
  }
`;
