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
			},
			animation: {
				"shake": "shake 0.82 cubic-bezier(.36,.07,.19,.97) both"
			},
			keyframes: {
				"shake": {
					"10%, 90%": {
						transform: "translate3d(-1px, 0, 0)"
					},
					"20%, 80%": {
						transform: "translate3d(2px, 0, 0)"
					},
					"30%, 50%, 70%": {
						transform: "translate3d(-4, 0, 0)"
					},
					"40%, 60%": {
						transform: "translate3d(4px, 0, 0)"
					}
				}
			}
		},
		fontFamily: {
			'mono': ['Fira Code', 'monospace']
		}
	},
	plugins: [],
}
