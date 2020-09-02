import styled, { keyframes, css } from 'styled-components';

interface LoadingInfoContainerProps {
  loading?: boolean;
}

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingInfoContainer = styled.div<LoadingInfoContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
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
      button {
        border: 0;
        background: transparent;
      }
    }
  }
`;

export const DetailedInformationWeatherContainer = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-align: center;

  width: 90%;
  background-color: #ffffff;
  border: 0;
  border-radius: 0.8rem;
  margin: 3.2rem;
  padding: 1.2rem 0rem;
`;

export const HourInformation = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
