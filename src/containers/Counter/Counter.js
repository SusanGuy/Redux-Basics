import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import actionTypes from "../../store/actions";
class Counter extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map(item => {
            return (
              <li
                key={item.id}
                onClick={() => this.props.onDeleteResult(item.id)}
              >
                {item.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () =>
      dispatch({
        type: actionTypes.INCREMENT
      }),
    onDecrementCounter: () => {
      dispatch({
        type: actionTypes.DECREMENT
      });
    },
    onAddCounter: () => {
      dispatch({
        type: actionTypes.ADD,
        value: 5
      });
    },
    onSubtractCounter: () => {
      dispatch({
        type: actionTypes.SUBTRACT,
        value: 5
      });
    },
    onStoreResult: counter => {
      dispatch({
        type: actionTypes.STORE_RESULT,
        counter
      });
    },
    onDeleteResult: id => {
      dispatch({
        type: actionTypes.DELETE_RESULT,
        id
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
