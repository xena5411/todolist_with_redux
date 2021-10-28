const babelConfigForWebpackBuild = {
	presets: [
		[
			'@babel/preset-env',
			{
				loose: true,
				useBuiltIns: 'usage',
				corejs: 3,
			},
		],
		'@babel/preset-react',
	],
	plugins: [
		['module-resolver', { root: ['./src'] }],
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-import-meta',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-json-strings',
		'@babel/plugin-transform-react-constant-elements',
	],
};

const babelConfigForJest = {
	presets: [
		[
			'@babel/preset-env',
			{
				loose: true,
				useBuiltIns: 'usage',
				corejs: 3,
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-react',
	],
	plugins: [
		['module-resolver', { root: ['./src'] }],
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-import-meta',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-json-strings',
		'@babel/plugin-transform-react-constant-elements',
	],
};

module.exports = api => {
	const isTest = api.env('test');

	if (isTest) {
		return babelConfigForJest;
	}

	return babelConfigForWebpackBuild;
};
