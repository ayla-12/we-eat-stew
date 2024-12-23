import ErrorBoundary from './components/error/ErrorBoundary';
import router from '@/router/Router.tsx';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import { Analytics } from '@vercel/analytics/react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ErrorBoundary>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<RouterProvider router={router} />
				<Analytics />
			</ThemeProvider>
		</ErrorBoundary>
	);
}

export default App;
