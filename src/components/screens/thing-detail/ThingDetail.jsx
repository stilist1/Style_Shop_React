import React from 'react';
import styles from './thing-detail.module.css';
import { useParams, Link } from 'react-router-dom';
import { things } from '../home/things.data.js';
import { Header } from '../../Header/Header';
import { CartContext } from '../../Cart/CartProvider'; // Используйте CartContext

const ThingDetail = () => {
  const { id } = useParams();
  const thing = things.find((item) => item.id === parseInt(id, 10));

  // Получите addToCart из контекста
  const { addToCart } = React.useContext(CartContext);

  if (!thing) {
    return <div>Thing not found</div>;
  }

  const handleAddToCart = () => {
    // Вызываем функцию addToCart и передаем выбранный товар
    addToCart(thing);
    // Добавьте здесь логику для отображения сообщения об успешном добавлении в корзину, если нужно
  };

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles['product-img']}>
          <img src={thing.image} height="420" width="327" alt={thing.name} />
        </div>
        <div className={styles['product-info']}>
          <div className={styles['product-text']}>
            <h1>{thing.name}</h1>
            <p>{thing.description}</p>
          </div>
          <div className={styles['product-price-btn']}>
            <p>$<span>{thing.price}</span></p>
            <Link className={styles.backbtn} to="/Home/">
              Back to home
            </Link>
            <button className={styles.link}>Buy Now</button>
            <button className={styles.cartBtn} onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingDetail;
