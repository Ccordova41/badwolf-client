import React from "react";
import {ButtonChild} from "./ButtonChild";

class Button extends React.Component {

    render() {
        return (
          <div className="button">
              <ButtonChild />
          </div>
        );
    }
}

export default Button;
