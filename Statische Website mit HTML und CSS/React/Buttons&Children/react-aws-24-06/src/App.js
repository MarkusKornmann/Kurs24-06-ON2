import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import CustomTextField from "./components/common/CTF/CustomTF";
import StandardBtn from "./components/common/standard-btn/StandardBtn";
import Navbar from "./components/layout/navbar/Navbar";
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";

export default function App() {
  const [text, setText] = useState('');

  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="main-container">
      <img src={logo} className="App-logo" alt="logo" />

      <Navbar />
      <CustomTextField
        label="Name"
        placeholder="Enter your name"
        value={text}
        onChange={handleTextChange}
      />
      <p>Entered Text: {text}</p>
      <Content />
      <StandardBtn>Masko 2024</StandardBtn>
      <Footer />
    </div>
  );
}


