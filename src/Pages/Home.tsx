import styled from 'styled-components';

import Carousel from '../components/Carousel';
import Menu from '../ui/Menu';
import PopularLocation from '../components/Home/PopularLocation';
import { usePreImg } from '../hooks/usePreImg';
import PopularCard from '../components/PopularCard';
import EventPrivew from '../components/Home/EventPrivew';

//width : 170rem,min-width : 150rem ,padding 1rem 5rem
const StyledHome = styled.div`
  width: 100vw;
  height: 300rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-bottom: 10rem;
`;

const Home = (): JSX.Element => {
  const datas = usePreImg();
  console.log(datas);
  const po_location = datas?.popular_location?.location;
  const best_hotel = datas?.popular_accommodation?.best;
  const hot_hotel = datas?.hot_hotel.hot;
  const po_activity = datas?.popular_activity.activity;

  const slides = [
    '/slide/city.jpg',
    '/slide/dubai.jpg',
    '/slide/japan.jpg',
    '/slide/winter.jpg',
    '/slide/city.jpg',
  ];
  return (
    <StyledHome>
      <Carousel />
      <PopularLocation
        title="인기 숙소 추천"
        render={best_hotel?.map((popular) => (
          <PopularCard img={popular.url} title={popular.title} height="middle" />
        ))}
      />
      <PopularLocation
        title="hot한 호텔"
        render={hot_hotel?.map((popular) => (
          <PopularCard img={popular.url} title={popular.title} height="middle" />
        ))}
      />
      <PopularLocation
        title="인기있는 지역"
        render={po_location?.map((popular) => (
          <PopularCard img={popular.url} title={popular.title} />
        ))}
      />
      <PopularLocation
        title="많이찾는 액티비티"
        render={po_activity?.map((popular) => (
          <PopularCard img={popular.url} title={popular.title} />
        ))}
      />
      <EventPrivew />
    </StyledHome>
  );
};
export default Home;
