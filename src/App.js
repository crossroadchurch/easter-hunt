import React from 'react'
import QrReader from './components/qr-reader'

function App() {
	return (
		<div className="App">
			<header className="container mx-auto p-4 text-center">
				<h1 className="font-bold text-3xl text-pink-500">Easter Egg Hunt</h1>
			</header>
			<section className="container mx-auto">
				<QrReader />
			</section>
		</div>
	)
}

export default App
