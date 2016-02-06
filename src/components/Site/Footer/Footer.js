import React, {Component} from "react";

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';

import s from './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className={s.root}>
        <Wrapper>
          <p className={s.copyNotice}>
            &copy; Forever and ever until the end of time
          </p>
        </Wrapper>
      </footer>
    )
  }
}
