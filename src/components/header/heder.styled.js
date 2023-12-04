import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  background-color: blue;
`;


export const NavStyled = styled.nav`
  display: inline;
  /* flex-direction: row; */
`;

export const ListStyled = styled.ul`
  display: inline-flex;
  flex-direction: row;
  list-style: none;
`;

export const ItemListStyled = styled.li`
  /* vertical-align: middle; */
  /* display: flex;
  justify-content: center; */
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
  /* align-items: center; */
  font-size: 24px;
  color: blueviolet;
  text-decoration: none;
`;
