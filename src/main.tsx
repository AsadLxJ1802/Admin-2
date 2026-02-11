import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GlabalaContext } from './context/Context.tsx'

createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
    <GlabalaContext>
      <App />
    </GlabalaContext>
  </BrowserRouter>
)
