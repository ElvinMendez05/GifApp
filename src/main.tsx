import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { MyCounter } from './counter/components/MyCounter'
import './index.css'
import { GifsApp } from './GifsApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp />
  </StrictMode>,
)
