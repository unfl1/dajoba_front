// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protectedroute from './components/Protectedroute'; // ProtectedRoute 컴포넌트 임포트
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Account from './pages/Account';
import Coverletterlist from './pages/Coverletterlist';
import Coverletter from './pages/Coverletter';
import Recruitment from './pages/Recruitment';
import Introduce from './pages/Introduce';
import Analyze from './pages/Analyze';
import Notfoundpage from './pages/Notfoundpage';

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
            <Route path="Coverletter" element={
              <Protectedroute>
                <Coverletter />
              </Protectedroute>
            } />
            <Route path="Recruitment" element={<Recruitment />} />
            <Route path="Introduce" element={<Introduce />} />
            <Route path="Analyze" element={<Analyze />} />
            <Route path="Notfoundpage" element={<Notfoundpage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;