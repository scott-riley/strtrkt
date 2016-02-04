import React, {Component, PropTypes} from "react";

export default class AppContainer extends Component {
	render () {
    const {children} = this.props
		return (
			<div>
				<main>
          <div>
  					<h1>Dat site do</h1>
            {this.props.children}
          </div>
				</main>
			</div>
		);
	}
}
