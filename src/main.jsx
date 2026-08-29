import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//bootstrap js
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/js/bootstrap.bundle.js"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
