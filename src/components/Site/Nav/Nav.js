import React, {Component} from "react";

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';

import s from './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <nav className={s.root}>
        <Wrapper>
          <h1 className={s.logo}>Strtkt</h1>
          <div className={s.links}>
            <a className={s.link}>Home</a>
            <a className={s.link}>About</a>
          </div>
          <div className={s.cta}>
            <Btn href="/app">
              Go to app
            </Btn>
          </div>
        </Wrapper>
      </nav>
    )
  }
}
