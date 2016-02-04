import React, {Component, PropTypes} from "react";
import s from "./Btn.css";

export default class Btn extends Component {
  render() {
    const {type, href, onClick, children} = this.props;
    return (
      href ?
        <a className={s.root} href={href}>{children}</a>
      :
        <button className={s.root} onClick={onClick}>
          {children}
        </button>
    )
  }
}

Btn.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
