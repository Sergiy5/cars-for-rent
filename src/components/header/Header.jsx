import { NavLink } from "react-router-dom";
import styles from '../header/Header.module.css'

const Header = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.listNav}>
        <li className={ styles.itemNav}>
          <NavLink to="/" className={ styles.itemNavLink}>Home</NavLink>
        </li>
        <li className={ styles.itemNav}>
          <NavLink to="/catalog" className={ styles.itemNavLink}>Catalog</NavLink>
        </li>
        <li className={ styles.itemNav}>
          <NavLink to="/favorite" className={ styles.itemNavLink}>Favorite</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
