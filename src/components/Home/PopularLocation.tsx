import styled from 'styled-components';

import PopularCard from '../PopularCard';

const StyledPopularLocation = styled.div`
  padding: 2rem 4rem;
  .popular_lo_title {
    font-size: 2rem;
    font-weight: 500;
  }
  #popular_lo_card {
    ul {
      display: flex;
      gap: 2rem;
    }
  }
`;

const PopularLocation = (): JSX.Element => {
  return (
    <StyledPopularLocation>
      <div className="popular_lo_title">인기있는 여행지</div>
      <div id="popular_lo_card">
        <ul>
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </ul>
      </div>
    </StyledPopularLocation>
  );
};
export default PopularLocation;
