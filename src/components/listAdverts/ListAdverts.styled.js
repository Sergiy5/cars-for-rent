import styled from 'styled-components';

export const WrapperCardStyled = styled.div`
  display: block;
  font-size: 16px;
  position: relative;
  width: 274px;
  height: 426px;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const WrapperTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  align-items: center;
  margin: 4px 5px;
`;

export const TitleStyled = styled.h2`
  margin: 0;
  font-family: 'Manrope-Medium';
  font-size: 16px;
`;

export const ListCardStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  font-family: 'Manrope-Regular';
  list-style: none;
`;
export const ItemCardStyled = styled.li`
  font-size: 12px;
  padding: 0 6px;
  margin-top: 4px;

  &:not(:last-child) {
    border-right: solid gray 1px;
  }
`;

export const ImageCardStyled = styled.img`
  margin-bottom: 4px;
  object-fit: cover;
  width: 274px;
  height: 268px;
  border-radius: 12px;
`;
export const IconStyled = styled.div`
  position: absolute;
  cursor: pointer;
  width: 18px;
  height: 18px;
  top: 16px;
  left: 240px;
  background-image: url('../../images/heard.svg');
`;

export const ModelNameStyled = styled.span`
  font-family: 'Inter-Medium';
  color: blue;
`;

export const ButtonCardStyled = styled.button`
  margin-top: 26px;
  width: 100%;
  height: 44px;
  color: #fff;
  border-radius: 12px;
  border: none;
  background-color: #3470ff;

  :hover {
    background: #0b44cd;
    cursor: pointer;
  }
`;
