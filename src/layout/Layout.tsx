import { Outlet } from 'react-router';
import styled from 'styled-components';

import Header from '../ui/Header';
import Footer from '../ui/footer';

const StyledLayout = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-rows: 30rem 1fr 20rem;
`;

const Layout = (): JSX.Element => {
  return (
    <StyledLayout>
      <Header>Our Trip</Header>
      <main>
        <Outlet />
      </main>

      <Footer />
    </StyledLayout>
  );
};
export default Layout;
