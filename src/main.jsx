import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PreloaderApp from './components/PreloaderApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreloaderApp>
      <App />
    </PreloaderApp>
  </StrictMode>,
)
