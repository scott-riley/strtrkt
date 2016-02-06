import React, {Component} from "react";
import Transmit from "react-transmit";

import Sidebar from 'components/App/Sidebar/Sidebar';

export default class AppContainer extends Component {
	/**
	 * Runs on server and client.
	 */
	render () {
		return (
			<div>
				<Sidebar />
				<main>
					<h1>Dat app do</h1>
					{this.props.children}
				</main>
			</div>
		);
	}
}
