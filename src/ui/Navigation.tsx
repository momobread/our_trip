import styled from 'styled-components';

const StyledNavigation = styled.nav`
  background-color: aliceblue;
  display: grid;
  list-style: none;
  position: absolute;
  top: 0;
  right: 0;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <li>로그인</li>
      <li>회원가입</li>
      <li>메뉴</li>
    </StyledNavigation>
  );
};
export default Navigation;
