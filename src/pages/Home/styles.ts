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

export const NewLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem 3.2rem 0;
  padding: 1.2rem;

  button {
    border: 0;
    background: transparent;

    svg {
      margin-left: 0.3rem;
    }
  }
`;

export const InputNewLocation = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 0.8rem;

    padding: 1rem 3.8rem 1rem;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: -3rem;
    z-index: 1;
  }
`;

export const SelectCityContainer = styled.div`
  margin: 0 3.8rem;
  border: 1px solid;
  border-radius: 0.8rem;

  background-color: #ffffff;
`;

export const CitiesToSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    padding: 0.5rem 4rem;
    li {
      list-style: none;
    }
  }
`;
