/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Payment.module.css";

import { Header } from "../Header/Header";

const PaymentPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const totalAmount = queryParams.get("totalAmount");

  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    address: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваша логика обработки данных оплаты здесь
  };

  return (
    <div><Header />
    <div className={styles.container}>
      
      <div className={styles.paymentPage}>
        <h1 className={styles.title}>Pay</h1>
        <p className={styles.amount}>Total amount to be paid: ${totalAmount || 0}</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>
            Phone number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>
            Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="comment" className={styles.label}>
            Comment (optional):
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.button}>
            Pay
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default PaymentPage;
