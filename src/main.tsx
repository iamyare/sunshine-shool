import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import './components/translation/i18next.tsx'
import { LanguageContextProvider } from './components/translation/languageContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
