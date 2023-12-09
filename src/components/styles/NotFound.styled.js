import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkNotFoundStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 153px;
  height: 46px;
  border-radius: 16px;
  color: #ffffff;
  border: none;
  background-color: #3e85f3;
  margin: 30px auto;
`;

export const WrapperNotFound = styled.div`
  text-align: center;
  padding: 264px 61px 246px;
  font-size: 25px;
`;
