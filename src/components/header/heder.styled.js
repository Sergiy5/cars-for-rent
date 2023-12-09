import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: blue;
`;

export const ListStyled = styled.ul`
  display: inline-flex;
  flex-direction: row;
  margin: 0;
  list-style: none;
`;

export const ItemListStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  padding-top: 5px;
  cursor: pointer;
  margin-right: 25px;
  width: 155px;
  height: 32px;
  border-radius: 12px;
  border: none;
  background: yellow;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 24px;
  color: blueviolet;
  text-decoration: none;
`;
