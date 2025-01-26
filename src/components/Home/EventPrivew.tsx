import styled from 'styled-components';

import EventCard from './EventCard';

const StyledEventPrview = styled.section`
  display: flex;
  justify-content: center;
  #event_pre_content {
    /* border: 1px solid black; */
    width: 170rem;
    padding: 1rem 5rem;
    display: flex;
    gap: 2rem;
  }
`;
//30rem

const EventPrivew = (): JSX.Element => {
  return (
    <StyledEventPrview>
      <div id="event_pre_content">
        <EventCard
          size="middle"
          color="primary"
          title="매일매일 출석체크"
          img="/bg.jpeg"
          content="매일매일 출석체크를 통해 포인트와 선물을 받아요"
        />
        <EventCard
          size="middle"
          color="primary"
          title="랜덤 쿠폰 팩"
          img="/bg2.jpg"
          content="랜덤 쿠폰팩으로 원래 가격보다 훨씬 저렴하게 예약하자~"
        />
        <EventCard
          size="small"
          color="basic"
          title="천원의 행복"
          content="확률싸움을 시작하지. 천원으로 숙소 예약하자"
        />
        <EventCard
          size="small"
          color="basic"
          title="퀴즈"
          content="퀴즈를 풀면 혜택이 주어진다구? 이건 꼭 해야돼!"
        />
      </div>
    </StyledEventPrview>
  );
};
export default EventPrivew;
