module.exports = {
  content: [
	  './index.html',
	  './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
		colors: {
			background: {
				dark: "#101010",
				light: "#fafafa"
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
