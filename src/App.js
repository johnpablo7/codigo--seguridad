import React from 'react';
import { UseState } from './UseState.js';
// import { ClassState } from './ClassState.js';
import { UseReducer } from './UseReducer.js';

function App() {
	return (
		<div>
			<UseState name="UseState" />
			{/* <ClassState name="ClassState" /> */}
			<UseReducer name="Use Reducer" />
		</div>
	);
}

export default App;
