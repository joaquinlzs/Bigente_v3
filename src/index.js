import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import store from './redux/store';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
