import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';
import { GlobalCSS } from './constants/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
