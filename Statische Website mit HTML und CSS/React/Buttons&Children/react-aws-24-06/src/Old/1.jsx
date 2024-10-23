import React from 'react';
import styles from './CustomTextField.module.css';

export default function CustomTextField({ label, placeholder, value, onChange }) {
  return (
    <div className={styles.customTextField}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}