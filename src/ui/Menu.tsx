import { NavLink } from 'react-router';
import styled from 'styled-components';
import { HiHome, HiUserGroup } from 'react-icons/hi';
import { HiMiniGlobeAlt, HiBuildingOffice2, HiMiniCake } from 'react-icons/hi2';

const StyledMenu = styled.ul`
  display: flex;
  padding-top: 3rem;
  justify-content: center;
  gap: 5rem;

  font-size: 2rem;
  color: var(--color-grey-400);
  .active {
    color: var(--primary-900);
  }
  li:hover {
    color: var(--primary-900);
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Menu = (): JSX.Element => {
  return (
    <StyledMenu>
      <NavLink to="/motel">
        <li>
          <HiHome style={{ fontSize: '5rem' }} />
          <span>모텔</span>
        </li>
      </NavLink>
      <NavLink to="/hotel">
        <li>
          <HiBuildingOffice2 style={{ fontSize: '5rem' }} />
          <span>호텔</span>
        </li>
      </NavLink>
      <NavLink to="/guest">
        <li>
          <HiUserGroup style={{ fontSize: '5rem' }} />
          <span>게스트하우스</span>
        </li>
      </NavLink>
      <NavLink to="/leisure">
        <li>
          <HiMiniGlobeAlt style={{ fontSize: '5rem' }} />
          <span>레저</span>
        </li>
      </NavLink>
      <NavLink to="/activity">
        <li>
          <HiMiniCake style={{ fontSize: '5rem' }} />
          <span>공연/축제</span>
        </li>
      </NavLink>
    </StyledMenu>
  );
};
export default Menu;
