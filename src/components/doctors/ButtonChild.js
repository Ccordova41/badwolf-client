import React from "react";
import { connect } from 'react-redux';

export class ButtonChild extends React.Component {
    constructor() {
        super();
        this.state = {
            like: 0
        };
    }

    IncreaseLike() {
        this.setState({
            like: this.state.like + 1
        });
    }


    render() {
        return (
            <div className="doctor-button">
                Liked: {this.state.like}
                <button onClick={() => this.IncreaseLike()} className="like-button"> Likes! </button>
            </div>
        );
    }
}
