import React from 'react';
import styles from './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, RegisterPage, SignInPage, DetailPage } from './pages';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signIn' element={<SignInPage />} />
          <Route path='/detail/:touristRouteId' element={<DetailPage />} />
          <Route path='*' element={<RegisterPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
