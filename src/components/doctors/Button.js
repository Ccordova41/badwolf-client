import React, { Component } from 'react';
import ButtonChild from "./ButtonChild";

const API_URL = process.env.REACT_APP_API_URL;

class Button extends Component {
  state = {
    like: 0
  }


  changeLike = () => {
    this.setState({
      like: this.state.like + 1
    })
  }


  callApi = () => {
    console.log('a')
    fetch(`${API_URL}/doctors`)
      .then(res => {
        if(res.status !== 200) {
          throw new Error(res.statusText)
        }
        console.log('b')

        return res.json()
      })
      .then(function(data) {
        console.log('c', data);
      })
      .catch(error => console.log('d', error));
      console.log('e')

      // a b c + data e
    }


  render() {
    return (
    <div className="likes-count">
      <ButtonChild increaseLike={this.changeLike} like={this.state.like}/>
      <button onClick={this.callApi}>Call Api</button>
    </div>
    );
  }
}
export default Button;
