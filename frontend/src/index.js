import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './Pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import Browse from './Pages/Browse';
import Details from './Pages/Details';
import Streams from './Pages/Streams';
import Profile from './Pages/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<App />} >
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="Browse" element={<Browse />} />
          <Route path="Details" element={<Details />} />
          <Route path="Streams" element={<Streams />} />
          <Route path="Profile" element={<Profile />} />

        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
