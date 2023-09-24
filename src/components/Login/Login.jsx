/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styles from './Login.module.css'

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { Header } from "../Header/Header";
import app from "./Firebase.js"; // Импорт Firebase приложения из файла firebase.js

const Login = () => {
  const [user, setUser] = useState(null); // Состояние для хранения информации о пользователе
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Состояние для хранения статуса авторизации

  // Функция для обработки входа через Google
  const handleGoogleLogin = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Пользователь успешно вошел через Google, информация о пользователе будет в result.user
      setIsAuthenticated(true); // Установить статус авторизации в true
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  // Функция для выхода из аккаунта
  const handleSignOut = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      setUser(null); // Сброс информации о пользователе после выхода
      setIsAuthenticated(false); // Установить статус авторизации в false
    } catch (error) {
      console.error("Exit error:", error);
    }
  };

  // Используем useEffect для слежения за состоянием авторизации пользователя
  useEffect(() => {
    const auth = getAuth(app);

    // Функция обработки изменения состояния авторизации
    const handleAuthStateChanged = (authUser) => {
      if (authUser) {
        // Пользователь вошел в аккаунт
        setUser(authUser);
        setIsAuthenticated(true); // Установить статус авторизации в true
      } else {
        // Пользователь вышел из аккаунта
        setUser(null);
        setIsAuthenticated(false); // Установить статус авторизации в false
      }
    };
    // Подписываемся на изменения состояния авторизации
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);

    // Очистка подписки при размонтировании компонента
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.card}>
          {isAuthenticated ? (
            <div className={styles.userInfo}>
              <img src={user.photoURL} alt="User avatar" />
              <p className={styles.logText}>Welcome, {user.displayName}!</p>
              <button className={styles.logBtn} onClick={handleSignOut}>Log out</button>
            </div>
          ) : (
            <div className={styles.loginButton}>
              <p>Please log in to your account:</p>
              <button onClick={handleGoogleLogin}>Sign in with Google</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
