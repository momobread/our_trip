import styled, { css } from 'styled-components';

interface StyledPopularCardProps {
  height: string;
}

const StyledPopularCard = styled.li<StyledPopularCardProps>`
  border: 1px solid #000000;
  width: 25rem;
  height: 30rem;
  border-radius: 0.7rem;
  img {
    border-radius: inherit;
    width: inherit;
    height: 25rem;
  }
  span {
    font-size: 2rem;
    font-weight: 500;
  }
  ${(props) =>
    props.height === 'middle'
      ? css`
          & {
            height: 40rem;
            width: 30rem;
          }
          img {
            height: 35rem;
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
