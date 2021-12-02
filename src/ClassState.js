import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';
class ClassState extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			error: false,
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

				if (SECURITY_CODE === this.state.value) {
					this.setState({ error: false, loading: false });
				} else {
					this.setState({ error: true, loading: false });
				}

				console.log('terminando la validación');
			}, 3000);
		}
	}

	render() {
		// const { error, loading, value } = this.state;

		return (
			<div>
				<h2>Eliminar {this.props.name}</h2>

				<p>Por favor, escribe el código de seguridad.</p>

				{this.state.error &&
				!this.state.loading && <p>Error: el código es incorrecto</p>}
				{this.state.loading && <Loading />}

				<input
					placeholder="Código de Seguridad"
					value={this.state.value}
					onChange={(event) => {
						this.setState({ value: event.target.value });
					}}
				/>
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
