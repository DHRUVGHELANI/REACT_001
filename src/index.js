import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Dhruv from './components/dhruv'
// import Darkmode from './components/Darkmode';

// let obc = {
//   "text-align": "center",
//   "color": "black"
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Darkmode />
    <div>
      <Dhruv name="Ghelani Dhruv" />
      <p style={obc}>A web developer</p>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
