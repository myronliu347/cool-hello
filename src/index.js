import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Hello extends Component {
  static displayName = 'Hello';

  static propTypes = {
    color: PropTypes.string,
    background: PropTypes.string,
    round: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    children: PropTypes.node,
  }

  static defaultProps = {
    color: 'red',
    round: false,
    background: 'transparent',
    width: 200,
    height: 40,
    children: 'hello world'
  }

  render() {
    const { color, background, round, width, height, style = {}, className = '', children, ...others } = this.props;

    return (
      <div
        style={{
          color,
          background,
          width,
          height,
          borderRadius: round ? height / 2 : 2,
          ...style,
        }}
        className={`hello ${className}`}
        {...others}
      >
        {children}
      </div>
    );
  }
}
