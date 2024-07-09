// frontend/src/index.js
import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from "./store/session";
import { ModalProvider, Modal } from './context/Modal';
import App from './App';

import configureStore from './store';

import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <ModalProvider>
      <Provider store={store}>
          <App />
          <Modal />
      </Provider>
    </ModalProvider>
  );
}

root.render(<Root />)

//ReactDOM.render(
//  <React.StrictMode>
//    <Root />
//  </React.StrictMode>,
//  document.getElementById('root')
//);
