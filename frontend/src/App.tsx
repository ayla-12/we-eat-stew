import ErrorBoundary from './components/error/ErrorBoundary';
import router from '@/router/Router.tsx';
import GlobalStyle from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ErrorBoundary>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<RouterProvider router={router} />
				<Analytics />
				<SpeedInsights />
			</ThemeProvider>
		</ErrorBoundary>
	);
}

export default App;
