import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let hihi = "Hab einen schönen Tag!";
  const handleClick = () => {
    alert("Button wurde geklickt!");
  };
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Willkommen zu meiner ersten React-App</h1>
      
        <h2>{hihi}</h2>
    
        <h3>Das Ergebnis von 7 + 13 ist: {7 + 13}</h3>
     
      <button onClick={handleClick}>Klick mich</button>
        
     </div>
   );
}
export default App;
