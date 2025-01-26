import styled from 'styled-components';

import Carousel from '../components/Carousel';
import Menu from '../ui/Menu';
import PopularLocation from '../components/Home/PopularLocation';

const StyledHome = styled.div`
  height: 300rem;
`;

const Home = (): JSX.Element => {
  return (
    <StyledHome>
      <Menu />
      <Carousel />
      <PopularLocation />
    </StyledHome>
  );
};
export default Home;
