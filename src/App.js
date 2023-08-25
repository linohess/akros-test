import React from 'react';
import './App.css';

const buttons = [
  { name: 'Home', link: '' },
  { name: 'Shopping-List', link: 'https://google.com' },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Buon giorno sr Dean</h1>
      </header>
      <div className="ButtonContainer">
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              id={`testing-${button.name.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {button.name}
            </button>
          </a>
        ))}
      </div>
      <div className="FormContainer">
        <h2>Enter Your Information</h2>
        <form>
          <div className="FormField">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="testing-name"
              name="name"
            />
          </div>
          <div className="FormField">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="testing-address"
              name="address"
            />
          </div>
          <div className="FormField">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="testing-phone"
              name="phone"
            />
          </div>
          <button type="submit" id="testing-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
