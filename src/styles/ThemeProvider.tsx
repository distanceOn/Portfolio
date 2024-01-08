import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

type ThemeProviderProps = {
	children: React.ReactNode;
};

export const AppThemeProvider = ({ children }: ThemeProviderProps) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{children}
	</ThemeProvider>
);
