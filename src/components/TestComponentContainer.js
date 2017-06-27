import TestComponent from './TestComponent';
import {connect} from 'react-redux';
import {changeColor} from '../actions/appActions';

function mapStateToProps(state) {
  console.log(state);

  const text = state.color;

  return {
    text: text,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeColor(color) {
      dispatch(changeColor(color));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)