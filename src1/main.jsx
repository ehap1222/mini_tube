import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Snowfall from 'react-snowfall'
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Snowfall color='red' />
    <App />
  </StrictMode>,
)
