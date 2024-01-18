import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/GlobalStyle'
import { theme } from '../styles/theme'

type ThemeProviderProps = {
  children: React.ReactNode
}

export const AppThemeProvider = ({ children }: ThemeProviderProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
