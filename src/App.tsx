import React from 'react';
import './App.css';
import { Profile } from './components/profile/Profile';
import { NavBar } from './components/navbar/NavBar';
import { Header } from './components/header/Header';


function App() {
  return (
    <div className="App">
      <div className="app__container">
        <Header />
        <NavBar />
        <main className="main">
          <Profile />
        </main>
      </div>
    </div>
  );
}

export default App;
