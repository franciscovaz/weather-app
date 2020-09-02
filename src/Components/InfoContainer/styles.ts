import styled from 'styled-components';

export const Container = styled.button`
  width: 90%;
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
  justify-content: space-between;

  padding: 0 11%;

  margin-top: 2.5rem;

  /*  svg {
    margin-right: 25%;
  } */

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
