import styled, { css } from 'styled-components';

interface StyledPopularCardProps {
  height: string;
}

const StyledPopularCard = styled.li<StyledPopularCardProps>`
  width: 25rem;
  height: 30rem;
  border-radius: 0.7rem;
  img {
    border-radius: inherit;
    width: inherit;
    height: 25rem;
    opacity: 0.9;
  }
  span {
    font-size: 2rem;
    font-weight: 500;
  }
  ${(props) =>
    props.height === 'middle'
      ? css`
          & {
            height: 42rem;
            width: 30rem;
          }
          img {
            height: 37rem;
            width: 30rem;
          }
        `
      : ''}
`;

interface PopularCardType {
  img: string;
  title: string;
  height: string;
}

const PopularCard = ({ img, title, height }: PopularCardType): JSX.Element => {
  //제주도 부산 인천  서울 경주 대구
  return (
    <>
      <StyledPopularCard height={height}>
        <img src={img} />
        <div>
          <span>{title}</span>
        </div>
      </StyledPopularCard>
    </>
  );
};
export default PopularCard;
