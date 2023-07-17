import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hats from './Components/Hats';
import Women from './Components/Women';
import CategoryGrid from './Components/category-grid/category-grid';
import CategoryGridsimple from './Components/category-grid/category-grid-simple';
import NavBar from './Components/navigation/navigation-bar';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    {/* <Women/> */}
    {/* <Hats/> */}
    {/* <NavBar/> */}
    {/* <CategoryGrid/> */}
    {/* <CategoryGridsimple/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
