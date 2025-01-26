import styled from 'styled-components';

const StyledLogo = styled.div`
  width: 15rem;
  height: 15rem;
  img {
    width: inherit;
    height: inherit;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <img src="/orora.png" />
    </StyledLogo>
  );
};
export default Logo;
