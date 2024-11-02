// src/App.js
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <Header />

      {/* Placeholder Main Content */}
      <main className="main-content">
        <h1>Welcome to Our Application</h1>
        <p>This is the main content area. More pages will be added here later.</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;


