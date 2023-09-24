/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ThingItem from './thing-item/thingitem';
import { things as thingsData } from './things.data';
import { Header } from '../../Header/Header';
import styles from './Home.module.css'; // Import the styles

function Home() {
  const [things, setThings] = useState(thingsData);
  const [sortOption, setSortOption] = useState('nameAsc'); // По умолчанию сортировка по алфавиту

  // Функция для сортировки товаров
  const sortThings = () => {
    const sortedThings = [...things]; // Создаем копию массива товаров
    sortedThings.sort((a, b) => {
      if (sortOption === 'nameAsc') {
        return a.name.localeCompare(b.name); // Сортировка по алфавиту
      } else if (sortOption === 'priceDesc') {
        return b.price - a.price; // Сортировка от большей к меньшей цене
      } else if (sortOption === 'priceAsc') {
        return a.price - b.price; // Сортировка от меньшей к большей цене
      }
    });
    setThings(sortedThings); // Обновляем состояние списка товаров
  };

  // Обработчик изменения выбора сортировки
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <Header />
      <div>
        {/* Добавляем контейнер сортировки */}
        <div className={styles['sort-container']}>
          <label className={styles['sort-label']} htmlFor="sortSelect">
            Sort by:
          </label>
          <select
            className={styles['sort-select']}
            id="sortSelect"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="nameAsc">Alphabetically</option>
            <option value="priceDesc">Price High to Low</option>
            <option value="priceAsc">Price Low to High</option>
          </select>
          <button className={styles['sort-button']} onClick={sortThings}>
            Sort
          </button>
        </div>
        {/* Если есть вещи в списке, отображаем их с использованием компонента ThingItem */}
        {things ? (
          things.map((thing) => (
            <ThingItem key={thing.id} thing={thing} />
          ))
        ) : (
          // Если список вещей пуст, выводим сообщение
          <h1>There are no things</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
