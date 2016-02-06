import React, {Component, PropTypes} from 'react';
import s from './Wrapper.css';

export default class Wrapper extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={s.root}>
        {children}
      </div>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.any,
}
