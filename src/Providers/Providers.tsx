import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { AppThemeProvider } from './AppThemeProvider'
import { appStore } from '../store/appStore'

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <Provider store={appStore}>
    <BrowserRouter>
      <AppThemeProvider>{children}</AppThemeProvider>
    </BrowserRouter>
  </Provider>
)
