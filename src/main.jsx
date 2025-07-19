import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // ✅ import this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap your App */}
      <div className="w-full h-auto font-serif overflow-x-hidden">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
