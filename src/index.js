import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RefExample from "./App2";
import EffectExample from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RefExample/>
    <EffectExample/>
  </React.StrictMode>
);



