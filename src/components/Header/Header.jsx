import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <Link to="/">
            <button className={styles.Logo_Btn}>Style Shop</button>
          </Link>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link to="/home">Main</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.userActions}>
          <Link to="/login">
            <FaUser className={styles.icon} />
          </Link>
          <Link to="/cart">
            <FaShoppingCart className={styles.icon} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
