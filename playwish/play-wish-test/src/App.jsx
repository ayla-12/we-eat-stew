// src/App.jsx
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import WishForm from './components/WishForm/WishForm.jsx'; // WishForm 컴포넌트 import
import './App.css';

const App = () => {

  return (
    <div className="app-container">
      <h1>소원을 말해봐</h1>
      {/* WishForm 컴포넌트 추가 */}
      <WishForm />
    </div>
  );
};

export default App;
