import React from 'react';
import styles from "./Footer.module.css";

function Footer() {
  return (
     <div className={styles.footer}>
      {/*Masko 2024*/} 
       <footer>
        <a href="/impressum">Impressum</a> | <a href="/ueber-uns">Über uns</a>
      </footer> 
        </div>
    
     
    
    /*<div className={styles.Footer}>
      <footer>
        <a href="/impressum">Impressum</a> | <a href="/ueber-uns">Über uns</a>
      </footer> 
    </div>*/
  );
}

export default Footer;