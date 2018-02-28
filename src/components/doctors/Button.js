import React from "react";
import {ButtonChild} from "./ButtonChild";

class Button extends React.Component {

    render() {
        return (
          <div className="button">
              <ButtonChild
                  initialLike={0}
              />
          </div>
        );
    }
}

export default Button;
