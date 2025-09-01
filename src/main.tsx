import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './core/styles/index.css'
import { Chat } from './app/Chat.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Chat />
  </StrictMode>,
)
