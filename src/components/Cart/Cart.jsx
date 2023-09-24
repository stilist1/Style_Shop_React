/* eslint-disable no-unused-vars */ // Отключаем проверку на неиспользуемые переменные

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartHook } from "./useCart"; // Импорт хука для работы с корзиной
import { Header } from "../Header/Header"; // Импорт компонента Header
import styles from "./Cart.module.css"; // Импорт стилей для компонента

const Cart = () => {
  // Используем хук для работы с корзиной
  const { cartItems, removeFromCart } = useCartHook();
  // Состояние для количества товаров
  const [itemQuantities, setItemQuantities] = useState({});
  // Хук для навигации по страницам
  const navigate = useNavigate();

  // Функция для удаления товара из корзины
  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

  // Функция для изменения количества товаров в корзине
  const handleQuantityChange = (item, newQuantity) => {
    setItemQuantities({
      ...itemQuantities,
      [item.id]: newQuantity,
    });
  };

  // Функция для расчета общей суммы заказа
  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * (itemQuantities[item.id] || 1);
    });
    return total.toFixed(2);
  };

  // Функция для генерации выпадающего меню с количеством товаров
  const renderQuantityOptions = (item) => {
    const maxQuantity = 10;
    const itemQuantity = itemQuantities[item.id] || 1;

    const options = [];
    for (let i = 1; i <= maxQuantity; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return (
      <select
        value={itemQuantity}
        onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
      >
        {options}
      </select>
    );
  };

  return (
    <div>
      <Header /> {/* Выводим компонент Header */}
      <div className={styles.cart}>
        {cartItems.length === 0 ? (
          <p>Your shopping cart is empty.</p>
        ) : (
          <div>
            <p className={styles["cart-title"]}>Your shopping cart:</p>
            {cartItems.map((item) => (
              // Уникальный ключ для каждого элемента в корзине
              <div key={item.id} className={styles["cart-item"]}>
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles["item-image"]}
                  />
                </div>
                <div className={styles["item-info"]}>
                  <p>{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {renderQuantityOptions(item)}</p>
                </div>
                <button
                  className={styles["remove-button"]}
                  onClick={() => handleRemoveItem(item)}
                >
                  Delete
                </button>
              </div>
            ))}
            <p className={styles["total-price"]}>
              Total amount to be paid: ${calculateTotalPrice()}
            </p>
            <button
              className={styles["payment-button"]}
              onClick={() =>
                navigate(`/payment?totalAmount=${calculateTotalPrice()}`)
              }
            >
              Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
