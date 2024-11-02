// src/App.js
import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <Header />

      {/* Main Content - Body */}
      <main className="main-content">
        <Body />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;



