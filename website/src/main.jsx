import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/App'
import './assets/css/index.css'

ReactDOM.render(
  <React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <App /> } />
			</Routes>
		</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
)
