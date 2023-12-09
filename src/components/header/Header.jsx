import { LogoHeader } from "components/logo/Logo";
import { ItemListStyled, ListStyled, NavLinkStyled, WrapperHeaderStyled } from "./heder.styled";

const Header = () => {
  return (
    <WrapperHeaderStyled>
      <LogoHeader />
        <ListStyled>
          <ItemListStyled>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </ItemListStyled>
          <ItemListStyled>
            <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
          </ItemListStyled>
          <ItemListStyled>
            <NavLinkStyled to="/favorite">Favorite</NavLinkStyled>
          </ItemListStyled>
        </ListStyled>
    </WrapperHeaderStyled>
  );
};

export default Header;
