import React, { Component } from 'react';
import ButtonChild from "./ButtonChild";

class Button extends Component {
  state = {
    like: 0
  }

  changeLike = () => {
    this.setState({
      like: this.state.like + 1
    })
  }


  render() {
    return (
    <div className="likes-count">
      <ButtonChild increaseLike={this.changeLike.bind(this)} like={this.state.like}/>
    </div>
    );
  }
}
export default Button;
