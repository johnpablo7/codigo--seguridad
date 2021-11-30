import React from 'react';
import { UseState } from './UseState.js';
import { ClassState } from './ClassState.js';

function App() {
	return (
		<div>
			<UseState name="UseState" />
			<ClassState name="ClassState" />
		</div>
	);
}

export default App;
