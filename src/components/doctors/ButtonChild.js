import React from "react";

export class ButtonChild extends React.Component {
    constructor(props) {
        super();
        this.state = {
            like: props.initialLike
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
