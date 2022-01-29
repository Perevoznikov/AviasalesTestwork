import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ModalProvider} from './contexts/ModalContext';

ReactDOM.render(
  <ModalProvider>
    <App/>
  </ModalProvider>,
  document.getElementById('root')
);
