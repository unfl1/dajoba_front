import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Account from './pages/Account';
import Coverletterlist from './pages/Coverletterlist';
import Coverletter from './pages/Coverletter';
import Openrecruitment from './pages/Openrecruitment';
import Recruitment from './pages/Recruitment';
import Introduce from './pages/Introduce';
import Analyze from './pages/Analyze';
import Notfoundpage from './pages/Notfoundpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="Account" element={<Account/>}/>
      <Route path="Coverletterlist" element={<Coverletterlist/>}/>
      <Route path="Coverletter" element={<Coverletter/>}/>
      <Route path="Openrecruitment" element={<Openrecruitment/>}/>
      <Route path="Recruitment" element={<Recruitment/>}/>
      <Route path="Introduce" element={<Introduce/>}/>
      <Route path="Analyze" element={<Analyze/>}/>
      <Route path="Notfoundpage" element={<Notfoundpage/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
