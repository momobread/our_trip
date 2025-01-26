import styled from 'styled-components';
import { type ReactNode } from 'react';

const StyledPopularLocation = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  .popular_lo_title {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
  #popular_lo_content {
    width: 170rem;
    padding: 1rem 5rem;
  }
  #popular_lo_card {
    ul {
      display: flex;
      gap: 2.5rem;
      justify-content: center;
    }
  }
`;

interface PopularLocationProps {
  title: string;
  render?: ReactNode;
}

const PopularLocation = ({ title, render }: PopularLocationProps): JSX.Element => {
  // const data = usePreImg();
  return (
    <StyledPopularLocation>
      <div id="popular_lo_content">
        <div className="popular_lo_title">{title}</div>
        <div id="popular_lo_card">
          <ul>{render}</ul>
        </div>
      </div>
    </StyledPopularLocation>
  );
};
export default PopularLocation;
