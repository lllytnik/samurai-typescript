import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Profile } from './components/profile/Profile';
import { NavBar } from './components/navbar/NavBar';
import { Header } from './components/header/Header';
import { Dialogs } from './components/dialogs/Dialogs';


function App() {
  return (
    <div className="App">
      <div className="app__container">
        <Header />
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
