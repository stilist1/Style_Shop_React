import styles from './MainScreen.module.css';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../Header/Header';

function MainScreen() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/Home/`);
  };

  return (
    <div>
    <Header/>
      <div className={styles.mainForm}>
        <div className={styles.leftContent}>
          <h2 className={styles.shopDescription}>
            Welcome to our website where we sell high-quality 1:1 replica and authentic items. Shop with confidence and enjoy a smooth experience. Thank you for choosing us!
          </h2>

        </div>
        <div className={styles.rightContent}>
        
          <h3 className={styles.shopDescription2}>
            Our collection includes designer handbags, clothing, and accessories.
          </h3>
          <h3 className={styles.shopDescription4}>
            We guarantee the authenticity of all items and offer fast shipping and hassle-free returns. Shop with confidence and enjoy a smooth experience.
          </h3>
          <h3 className={styles.shopDescription3}>
            To order online, go to the special form. Thank you for choosing us!
          </h3>
                    <button onClick={handleButtonClick} className={styles.startBtn}>
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;