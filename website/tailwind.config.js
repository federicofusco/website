module.exports = {
	darkMode: 'class',
	content: [
		'./index.html',
		'./src/**/*.{js,jsx}'
	],
	theme: {
		extend: {
			colors: {
				background: {
					dark: "#101010",
					light: "#f1f5f9"
				}
			},
			minWidth: {
				'32': '8rem'
			}
		},
		fontFamily: {
			'mono': ['Fira Code', 'monospace']
		}
	},
	plugins: [],
}
