import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import Calculator from './Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div className="container">
      <div className="row vh-100 align-items-center">
        <Calculator/>
      </div>
    </div>
  </React.StrictMode>
);
