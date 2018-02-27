import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,

    }
  }

  IncreaseNumber = () => {
    this.setState({ clicks: this.state.clicks + 1});
  }

  render() {
      return (
        <div>
          <button onClick={this.IncreaseNumber}>Like!</button>
          { this.state.clicks}
        </div>
      )


  }
}

export default Button;
