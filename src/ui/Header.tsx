import { type ReactNode } from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
// import Menu from './Menu';

const StyledHeader = styled.header`
  padding: 1rem 0;
  /* background-color: var(--primary-900); */
  background-image: url('./bg2.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  #header_main {
    /* background-color: aqua; */
  }
  #title {
    font-size: 5rem;
    font-weight: 500;
    color: #fff;
    padding: 0 0.5rem;
    white-space: nowrap;
    width: fit-content;
    /* padding: 0 1rem; */
    /* background-color: aliceblue; */
  }
  #s_title {
    font-weight: 500;
    font-size: 2.5rem;
    color: #fff;
  }
`;
const Header = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <StyledHeader>
      <div id="header_main">
        <div id="title">{children}</div>
      </div>
      {/* <span id="s_title">life sis beautiful.Don't hesitate.</span> */}
      <Navigation />
    </StyledHeader>
  );
};
export default Header;
