import React, {Component} from "react";
import Transmit from "react-transmit";

import Sidebar from 'components/Sidebar/Sidebar';

export default class Main extends Component {
	/**
	 * Runs on server and client.
	 */
	render () {
		return (
			<div>
				<Sidebar />
				<main>
					<h1>Dat app do</h1>
				</main>
			</div>
		);
	}
}
