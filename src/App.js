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
import Recruitmentdetail from './pages/Recruitmentdetail';
import Mycoverletter from './pages/Mycoverletter';
import TermsOfUsePage from './pages/TermsOfUsePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

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
            <Route path="Mycoverletter/:introid" element={
              <Protectedroute>
                <Mycoverletter />
              </Protectedroute>
            } />
            <Route path="Recruitment" element={<Recruitment />} />
            <Route path="Recruitment/detail/:id" element={<Recruitmentdetail />} />
            <Route path="Projectintroduce" element={<Projectintroduce />} />
            <Route path="Analyze/:introid" element={<Analyze />} />
            <Route path="Notfoundpage" element={<Notfoundpage />} />
            <Route path="TermsOfUsePage" element={<TermsOfUsePage/>} />
            <Route path="PrivacyPolicyPage" element={<PrivacyPolicyPage/>} />           
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;