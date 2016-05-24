import React, {Component, PropTypes} from "react";
import Helmet from 'react-helmet';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import Nav from 'components/Site/Nav/Nav';
import Footer from 'components/Site/Footer/Footer';

import styles from 'global/Site.css';

export default class AppContainer extends Component {
	render () {
    const {children} = this.props
		return (
      <div className={styles.root}>
        <Helmet title="Strtrkt - we so startup m8s" />
        <Nav />
  			<main>
          {this.props.children}
  			</main>
        <Footer />
      </div>
		);
	}
}
