import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledCarousel = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 70%;

  margin: 0 auto;
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    will-change: transform;
  }
  .carousel-slide {
    flex-shrink: 0;
    /* flex: 0 0 100%; */
    width: 100%; //이래야지 부모크기만큼 따라감
    height: 60rem;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    img {
      height: 60rem;
      width: 100%;
    }
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
  }
  #left {
    left: 10px;
  }
  #right {
    right: 10px;
  }
`;
const Carousel = () => {
  const slides = ['/slide/city.jpg', '/slide/dubai.jpg', '/slide/japan.jpg', '/slide/winter.jpg'];
  const [currentIndex, setCurrenIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrenIndex((v) => (v === slides.length - 1 ? 0 : v + 1));
  };
  const handlePrevious = () => {
    setCurrenIndex((v) => (v === 0 ? 3 : v - 1));
  };
  return (
    <StyledCarousel>
      <div className="carousel-track">
        {slides.map((src) => (
          <div
            className="carousel-slide"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={src} />
          </div>
        ))}

        <button id="left" onClick={handlePrevious}>
          -
        </button>
        <button id="right" onClick={handleNext}>
          +
        </button>
      </div>
    </StyledCarousel>
  );
};
export default Carousel;
