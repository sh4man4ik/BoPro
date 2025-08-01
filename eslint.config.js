import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				window: 'readonly',
				document: 'readonly',
				localStorage: 'readonly',
				navigator: 'readonly',
				location: 'readonly',
				setTimeout: 'readonly',
				clearTimeout: 'readonly',
				setInterval: 'readonly',
				clearInterval: 'readonly',
				requestAnimationFrame: 'readonly',
				cancelAnimationFrame: 'readonly',
				Audio: 'readonly',

				require: 'readonly',
				module: 'readonly',
				process: 'readonly',
				__dirname: 'readonly',

				console: 'readonly',
				URL: 'readonly',
				URLSearchParams: 'readonly',
				globalThis: 'readonly'
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		rules: {
			semi: ['error', 'always'],
			'no-unused-vars': 'off',
			'no-undef': 'warn',
			'prefer-const': 'off'
		}
	}
];
