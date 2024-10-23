import StandardBtn from "../../common/standard-btn/StandardBtn";
//import CustomTextField from "./components/common/CTF/customTF";
import styles from "./Navbar.module.css";

function Navbar() {
  function onClickHello() {
    alert("Hello");
  }

  function onClickHi() {
    alert("Hi");
  }

  return (
  /*  <div className={styles.navbar}>
      <StandardBtn name="Home" />
      <StandardBtn name="Zurück" />
      <StandardBtn name="Kontakt" />
      <StandardBtn name="Warenkorb" />
    
      </div> */
      <div className={styles.navbar}>
      <StandardBtn myOnClick={onClickHello}>{"Home"}</StandardBtn>
      <StandardBtn myOnClick={onClickHi}>{"zurück"}</StandardBtn>
      <StandardBtn myOnClick={onClickHello}>{"Kontakt"}</StandardBtn>
      <StandardBtn myOnClick={onClickHi}>{"Warenkorb"}</StandardBtn>
      </div>
  );
}

export default Navbar;
