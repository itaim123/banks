import React from 'react';
import Main from '../Pages/Main/Main';
import BanksPage from '../Pages/BanksPage/BanksPage';
import {
    Routes,
    Route,
} from 'react-router-dom';

const Router = () => {
    return (
        <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/banksList" element={<BanksPage />} />
      <Route
        path="*"
        element={<Main />}
      />
    </Routes>
    )
}

export default Router;