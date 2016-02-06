import React, {Component, PropTypes} from "react";

import Wrapper from 'components/Global/Wrapper/Wrapper';
import Nav from 'components/Site/Nav/Nav';

import styles from 'global/Site.css';

export default class AppContainer extends Component {
	render () {
    const {children} = this.props
		return (
      <div className={styles.root}>
        <Nav />
  			<main>
          {this.props.children}
  			</main>
      </div>
		);
	}
}
