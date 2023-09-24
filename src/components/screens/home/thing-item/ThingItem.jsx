/* eslint-disable react/prop-types */ // 

import styles from '../Home.module.css';
import { useNavigate } from 'react-router-dom';

function ThingItem({ thing }) {
  // Используем хук useNavigate для навигации по страницам
  const navigate = useNavigate();
  // Обработчик клика на кнопке "Read more"
  const handleButtonClick = () => {
    // При клике вызываем функцию navigate, чтобы перейти на страницу с информацией о товаре по его ID
    navigate(`/Home/thing/${thing.id}`);
  };

  return (
    // Рендеринг компонента ThingItem, который отображает информацию о товаре
    <div key={thing.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${thing.image})`,
        }}
      />
      {/* Контейнер с информацией о товаре */}
      <div className={styles.info}>
        <h3>{thing.name}</h3> {/* Отображаем название товара */}
        <p>${thing.price}</p> {/* Отображаем цену товара */}
        {/* Кнопка "Read more" с обработчиком клика */}
        <button onClick={handleButtonClick} className={styles.readBtn}>
          Read more
        </button>
      </div>
    </div>
  );
}

export default ThingItem; // Экспорт компонента 
