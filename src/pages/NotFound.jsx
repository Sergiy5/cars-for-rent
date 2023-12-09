import { LinkNotFoundStyled } from 'components/styles/NotFound.styled';
import { WrapperNotFound } from 'components/styles/NotFound.styled';

const NotFound = () => {
  return (
    <WrapperNotFound >
      <div>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </div>
      <LinkNotFoundStyled to="/" >
        {' '}
        Back to Home
      </LinkNotFoundStyled>
    </WrapperNotFound>
  );
};

export default NotFound;
