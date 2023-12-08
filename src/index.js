import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
/*
import { initializeApp } from './utils/initialize';
import { store } from './redux/store';
import { Provider } from 'react-redux';
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="font-Noto">
    <App />
    </div>
);


/*
// 로컬 스토리지에서 토큰을 확인하여 앱을 초기화합니다.
initializeApp();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
*/