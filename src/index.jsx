import 'babel-core/polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { autobind } from 'core-decorators';

@autobind
export default
class Test extends Component {
  handleClick() {
    alert(this.props.text);
  }

  render() {
    console.log(this.props);
    return (
      <button onClick={this.handleClick}>{this.props.text}</button>
    );
  }
}

render(<Test text="works" />, document.getElementById('app'));
