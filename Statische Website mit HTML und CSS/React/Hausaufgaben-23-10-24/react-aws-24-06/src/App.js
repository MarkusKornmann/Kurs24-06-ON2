import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import CustomTextField from "./components/common/CTF/CustomTF";
import StandardBtn from "./components/common/standard-btn/StandardBtn";
import Navbar from "./components/layout/navbar/Navbar";
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";

function Message({ message }) {
  return <div>{message}</div>;
}

function Guestbook() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();   

    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div>
   
      <h5>Gästebuch</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <button type="submit">Senden</button>   
        
      </form>
     
      <ul>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </ul>
    </div>
  );
}

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
        label="Dein Name:"
        placeholder="Vorname, Nachname"
        value={text}
        onChange={handleTextChange}
      />
      <p>{/*>Old> entered Text*/} {text}</p>
      <Content />
      <StandardBtn>Masko 2024</StandardBtn>
      <Footer />
      <Guestbook />
    </div>
  );
}
