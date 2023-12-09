import { nanoid } from 'nanoid';
import {
  ButtonCardStyled,
  IconStyled,
  ImageCardStyled,
  ItemCardStyled,
  ListCardStyled,
  ModelNameStyled,
  TitleStyled,
  WrapperCardStyled,
  WrapperTitleStyled,
} from './ListAdverts.styled';

const ListAdverts = ({ cars, handleCar }) => {
  return cars.map(
    ({
      make,
      model,
      address,
      rentalCompany,
      rentalPrice,
      type,
      id,
      year,
      img,
      functionalities,
    }) => (
      <WrapperCardStyled key={nanoid()}>
        <IconStyled />
        <ImageCardStyled src={img} alt={`${make}${model}`} />
        <WrapperTitleStyled>
          <TitleStyled>
            {make}
            <ModelNameStyled model={model} />
            {year}
          </TitleStyled>
          <p>{rentalPrice}</p>
        </WrapperTitleStyled>
        <ListCardStyled>
          <ItemCardStyled key={nanoid()}>
            {address.split(' ').slice(3, 4)}
          </ItemCardStyled>
          <ItemCardStyled key={nanoid()}>
            {address.split(' ').slice(4)}
          </ItemCardStyled>
          <ItemCardStyled key={nanoid()}>{rentalCompany}</ItemCardStyled>
          <ItemCardStyled key={nanoid()}>{type}</ItemCardStyled>
          <ItemCardStyled key={nanoid()}>{model}</ItemCardStyled>
          <ItemCardStyled key={nanoid()}>{id}</ItemCardStyled>
          <ItemCardStyled key={nanoid()}>
            {rentalPrice.split('').slice(1).join('') < 100
              ? 'Economy car rentals'
              : 'Premium'}
          </ItemCardStyled>
          <ItemCardStyled key={nanoid()}>{functionalities[0]}</ItemCardStyled>
        </ListCardStyled>
        <ButtonCardStyled onClick={() => handleCar(id)}>
          Lern more
        </ButtonCardStyled>
      </WrapperCardStyled>
    )
  );
};
export default ListAdverts;
