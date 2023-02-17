import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/custom.scss';
import './index.css';
import App from './App';
import { VideosContextProvider } from './store/videos-context';
import { ToastContextProvider } from './store/toast-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <VideosContextProvider>
    <ToastContextProvider>
    <App />
    </ToastContextProvider>
  </VideosContextProvider>
);

