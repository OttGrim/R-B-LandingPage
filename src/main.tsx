import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from "./styles/global"
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>

)
