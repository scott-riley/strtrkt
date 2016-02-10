import React, {Component, PropTypes} from "react";
import s from "./Btn.css";

export default class Btn extends Component {
  render() {
    const {href, onClick, children, className} = this.props;
    const classNames = [
      s.root,
      className
    ].join(' ');
    return (
      href ?
        <a className={classNames} href={href}>{children}</a>
      :
        <button className={s.root} onClick={onClick}>
          {children}
        </button>
    )
  }
}

Btn.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
