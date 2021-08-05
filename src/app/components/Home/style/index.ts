import styled from 'styled-components/macro';
import bgi from 'app/assets/images/home.png';

export const HomePageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-image: url(${bgi});
  background-repeat: no-repeat;
  background-size: cover;
`;
