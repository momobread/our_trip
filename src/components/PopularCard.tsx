import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';

const StyledPopularCard = styled.li`
  width: 20rem;
  height: 20rem;
  background-color: blue;
`;

const PopularCard = (): JSX.Element => {
  //제주도 부산 인천  서울 경주 대구
  useEffect(() => {
    async function fetchCabin() {
      // const response = await axios.get('https://pumped-maize-warrior.glitch.me/trip');
    }
    fetchCabin();
  }, []);

  return <StyledPopularCard>PopularCard</StyledPopularCard>;
};
export default PopularCard;
