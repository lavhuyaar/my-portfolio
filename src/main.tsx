import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import Home from './pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='w-full max-w-[1800px] min-h-screen relative'>
    <Home />
    </div>
  </StrictMode>,
)
