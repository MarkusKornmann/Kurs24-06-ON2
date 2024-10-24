import StandardBtn from "../../common/standard-btn/StandardBtn";
//import CustomTextField from "./components/common/CTF/customTF";
import styles from "./Navbar.module.css";

function Navbar() {
  function onClickHome() {
    alert("Home");
  }

  function onClickZurück() {
    alert("Zurück");
  }

  function onClickKontakt() {
    alert("Kontakt");
  }

  function onClickWarenkorb() {
    alert("Warenkorb");
  }


  return (

      <div className={styles.navbar}>
      <StandardBtn myOnClick={onClickHome}>{"Home"}</StandardBtn>
      <StandardBtn myOnClick={onClickZurück}>{"Zurück"}</StandardBtn>
      <StandardBtn myOnClick={onClickKontakt}>{"Kontakt"}</StandardBtn>
      <StandardBtn myOnClick={onClickWarenkorb}>{"Warenkorb"}</StandardBtn>
      </div>
  );
}

export default Navbar;
