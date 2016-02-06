import React, {Component, PropTypes} from "react";
import styles from 'global/Site.css';

export default class AppContainer extends Component {
	render () {
    const {children} = this.props
		return (
			<main className={styles.root}>
				<h1>Dat site do</h1>
        {this.props.children}
			</main>
		);
	}
}
