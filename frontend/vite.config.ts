import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
});
