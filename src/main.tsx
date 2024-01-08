import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppThemeProvider } from './styles/ThemeProvider.tsx'
import { App } from './components/App/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
)
