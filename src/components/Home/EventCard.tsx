import styled, { css } from 'styled-components';

interface StyledEventCardType {
  size: string;
  color: string;
}
interface EventCardProps {
  size: string;
  color: string;
  title: string;
  img?: string;
  content: string;
}

const StyledEventCard = styled.div<StyledEventCardType>`
  width: 50rem;
  height: 22rem;
  border-radius: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  img {
    border-radius: 25rem;
    width: 15rem;
    height: 15rem;
  }
  span {
    font-size: 2.5rem;
    font-weight: 500;
  }
  p {
    margin: 1rem 0;
    font-size: 1.8rem;
  }
  #event_pre_text_wrap {
    text-align: center;
    width: 23rem;
  }

  ${(props) =>
    props.size === 'small'
      ? css`
          & {
            width: 30rem;
          }
        `
      : css``}
  ${(props) =>
    props.color === 'basic'
      ? css`
          & {
            background-color: var(--accent-500);
          }
        `
      : css`
          & {
            background-color: var(--accent-200);
          }
        `}
`;

const EventCard = ({ size, color, title, img, content }: EventCardProps): JSX.Element => {
  return (
    <StyledEventCard size={size} color={color}>
      <div id="event_pre_text_wrap">
        <span>{title}</span>
        <p>{content}</p>
      </div>
      {img && <img src={img} />}
    </StyledEventCard>
  );
};
export default EventCard;
