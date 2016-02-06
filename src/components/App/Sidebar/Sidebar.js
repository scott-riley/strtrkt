import React, {Component} from "react";

import s from './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    const title = "Eyoooo";
    return(
      <div className={s.root}>
        <h2 className={s.title}>{ title }</h2>
      </div>
    );
  }
}
