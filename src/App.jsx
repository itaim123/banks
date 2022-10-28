import React from 'react';
import Header from './components/Header/Header';
import Router from './Routes/Routes';
import Context from './context/context';
import Backdrop from './components/UI/Backdrop/Backdrop';
import './App.css';

function App() {
  return (<Context>
    <div className='App'>
      <Header />
      <Backdrop />
      <div className='page_wrapper'>
        <Router />
      </div>
    </div>
  </Context>);
}

export default App;
