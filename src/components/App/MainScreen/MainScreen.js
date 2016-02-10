import React, {Component} from "react";
import Btn from 'components/Global/Btn/Btn';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      submitted: "Nope",
    };
  }
  handleSubmit() {
    this.state.submitted === 'Yeahhhh' ?
      this.setState({submitted: 'Nope'})
    :
      this.setState({submitted: 'Yeahhhh'})
  }
  render() {
    const {submitted} = this.state;
    return(
      <div id="homepage">
        <p>Ello, dis is main app screen</p>
        <p>
          Submitted? {submitted}
        </p>
        <Btn onClick={this.handleSubmit}>
          Do a submit!
        </Btn>
      </div>
    )
  }
}
