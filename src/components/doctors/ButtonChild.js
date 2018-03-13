import React from "react";

const ButtonChild = (props) => {
    return (
      <div>
        Likes: {props.like}
        <button className="like-button" onClick={props.increaseLike}> 🎉 </button>
      </div>
    )

}

export default ButtonChild;
