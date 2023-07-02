import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <div className='w-full h-auto font-serif bg-neutral-900 text-white'>
      <App />
    </div>

  </React.StrictMode>,
)
