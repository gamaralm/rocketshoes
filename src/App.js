import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import store from './store';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  );
}
