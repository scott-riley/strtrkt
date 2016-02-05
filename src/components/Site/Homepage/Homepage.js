import React, {Component} from "react";
import Btn from 'components/Global/Btn/Btn';

export default class Homepage extends Component {
  render() {
    return(
      <div id="homepage">
        <p>Ello, dis is homepage</p>
        <Btn href="/app" type="primary">
          Go to app
        </Btn>
      </div>
    )
  }
}
