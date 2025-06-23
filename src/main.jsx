import React from 'react'
import ReactDOM from 'react-dom/client'
import DirectoryApp from './DirectoryApp.jsx'  // Changed from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DirectoryApp />
  </React.StrictMode>,
)