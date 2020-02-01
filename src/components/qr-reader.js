import React, { useState } from 'react'
import QrReader from 'react-qr-reader'

export default () => {
	const [ result, setResult ] = useState(null)

	function handleError(error) {
		console.log(error)
	}

	return (
		<div>
			<QrReader delay={300} onError={handleError} onScan={setResult} />
			<p>{result}</p>
		</div>
	)
}
