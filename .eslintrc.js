module.exports = {
	env: {
		browser: true,
		es2021: true,
		commonjs: true,
	},
	extends: 'eslint:recommended',
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		eqeqeq: 'warn',
		'space-in-parens': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		// quotes: ['error', 'double'],
		semi: ['error', 'always'],
		'max-len': [
			1,
			80,
			2,
			{
				ignoreUrls: true,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		// override configuration set by extending "eslint:recommended"
		'no-empty': 'warn',
		'no-cond-assign': ['error', 'always'],
	},
};
