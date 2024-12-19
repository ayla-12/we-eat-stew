module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	ignorePatterns: ['build', 'dist', 'public'],
	rules: {
		'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-trailing-spaces': 'error',
		'no-duplicate-imports': 'error',
		'@typescript-eslint/no-empty-interface': 'warn',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'prettier/prettier': ['error', { singleQuote: true, useTabs: true, printWidth: 120 }],
		'import/order': 'off', // import 정렬 규칙을 비활성화하여 Prettier에 맡김
		'import/newline-after-import': 'off',
	},
};
