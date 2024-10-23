import React, { useState } from 'react';
import styles from "./Navbar.module.css";

function Navbar() {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
  };
  return (
    <nav className={styles.navbar}>
    <button className={styles.homebtn} onClick={handleClick}>Zurück</button>
    {showAlert && <div>Hallo von Home!</div>}
    </nav>
  );
}

export default Navbar;
