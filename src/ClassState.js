import React from 'react';
import { Loading } from './Loading';

class ClassState extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: true,
			loading: false
		};
	}

	// componentWillMount() // Ya no se usa

	// UNSAFE_componentWillMount() {
	// 	console.log('componentWillMount');
	// }

	// componentDidMount() {
	// 	console.log('componentDidMount');
	// }

	componentDidUpdate() {
		console.log('actualización');

		if (!!this.state.loading) {
			setTimeout(() => {
				console.log('Haciendo la validación');

				this.setState({ loading: false });

				console.log('terminando la validación');
			}, 3000);
		}
	}

	render() {
		return (
			<div>
				<h2>Eliminar {this.props.name}</h2>

				<p>Por favor, escribe el código de seguridad.</p>

				{this.state.error && <p>Error: el código es incorrecto</p>}
				{this.state.loading && <Loading />}

				<input placeholder="Código de Seguridad" />
				<button
					// onClick={() => this.setState({ error: !this.state.error })}
					onClick={() => this.setState({ loading: true })}
					// Otra forma de trabajar
					// onClick={() =>
					// 	this.setState((prevState) => ({
					// 		error: !prevState.error
					// 	}))}
				>
					Comprobar
				</button>
			</div>
		);
	}
}

export { ClassState };
