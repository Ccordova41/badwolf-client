import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onIncrement } from '../../actions/selectAction'

const ButtonChild = ({ value, onIncrement }) => {
    return (
      <div>
        Likes: { value }
        <button className="like-button" onClick={ onIncrement }> 🎉 </button>
      </div>
    )

}

const mapStateToProps = (state) => {
  return {
    value: state.like
  }
  console.log(this.state.like);

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { onIncrement },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonChild);
