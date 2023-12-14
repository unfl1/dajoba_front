// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protectedroute from './components/Protectedroute';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Account from './pages/Account';
import Coverletterlist from './pages/Coverletterlist';
import Newcoverletter from './pages/Newcoverletter';
import Recruitment from './pages/Recruitment';
import Projectintroduce from './pages/Projectintroduce';
import Analyze from './pages/Analyze';
import Notfoundpage from './pages/Notfoundpage';
import RecruitmentDetail from './pages/Recruitmentdetail';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="Login" element={<Login />} />
            <Route path="Account" element={<Account />} />
            <Route path="Coverletterlist" element={
              <Protectedroute>
                <Coverletterlist />
              </Protectedroute>
            } />
            <Route path="Newcoverletter" element={
              <Protectedroute>
                <Newcoverletter />
              </Protectedroute>
            } />
            <Route path="Recruitment" element={<Recruitment />} />
            <Route path="Recruitment/Detail/:id" element={<RecruitmentDetail />} />
            <Route path="Projectintroduce" element={<Projectintroduce />} />
            <Route path="Analyze" element={<Analyze />} />
            <Route path="Notfoundpage" element={<Notfoundpage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;