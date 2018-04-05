import React, { Component } from 'react';
import ButtonChild from "./ButtonChild";

const API_URL = process.env.REACT_APP_API_URL;

class Button extends Component {


  callApi = () => {
    console.log('a')
    fetch(`${API_URL}/doctorslijpdo`)
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
      <ButtonChild />
      <button onClick={this.callApi}>Call Api</button>
    </div>
    );
  }
}
export default Button;

// CLick button -> action to updateLike
// updateLike => disptach(updatingLikeCount)
  // fetch(model) => API update Like Count
