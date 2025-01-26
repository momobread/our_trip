import styled from 'styled-components';

import Carousel from '../components/Carousel';
import Menu from '../ui/Menu';
import PopularLocation from '../components/Home/PopularLocation';
import { usePreImg } from '../hooks/usePreImg';
import PopularCard from '../components/PopularCard';
import EventPrivew from '../components/Home/EventPrivew';

//width : 170rem,min-width : 150rem ,padding 1rem 5rem
const StyledHome = styled.div`
  height: 300rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 10rem;
`;

const Home = (): JSX.Element => {
  const location = usePreImg();
  const slides = [
    '/slide/city.jpg',
    '/slide/dubai.jpg',
    '/slide/japan.jpg',
    '/slide/winter.jpg',
    '/slide/city.jpg',
  ];
  return (
    <StyledHome>
      <Menu />
      <Carousel />
      <PopularLocation
        title="인기 숙소 추천"
        render={slides?.map((popular) => (
          <PopularCard img={popular.url} title={popular.title} height="middle" />
        ))}
      />
      <PopularLocation
        title="hot한 호텔"
        render={slides?.map((popular) => (
          <PopularCard img={popular.url} title={popular.title} height="middle" />
        ))}
      />
      <PopularLocation
        title="인기있는 지역"
        render={location?.map((popular) => <PopularCard img={popular.url} title={popular.title} />)}
      />
      <PopularLocation
        title="많이찾는 액티비티"
        render={location?.map((popular) => <PopularCard img={popular.url} title={popular.title} />)}
      />
      <EventPrivew />
    </StyledHome>
  );
};
export default Home;
