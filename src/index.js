import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'components/styles/GlobalStyled';
import { App } from 'components/App';
// import './components/fonts/Inter/Inter-Medium.ttf';
// import './components/fonts/Manrope/Manrope-Medium.ttf';
// import './components/fonts/Manrope/Manrope-Regular.ttf';
// import './components/fonts/Manrope/Manrope-SemiBold.ttf';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="cars-for-rent">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
