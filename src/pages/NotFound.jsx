import { NavLink } from 'react-router-dom';
import styles from '../components/styles/BtnNotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.wrappernotFound}>
      <div>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </div>
      <NavLink to="/" className={styles.btnNotFound}>
        {' '}
        Back to Home
      </NavLink>
    </div>
  );
};

export default NotFound;
