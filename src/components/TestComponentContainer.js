import TestComponent from './TestComponent';
import {connect} from 'react-redux';
import {changeColor, newPath, toggleFillFlag} from '../actions/appActions';

function mapStateToProps(state) {
  console.log(state);

  const text = state.color;

  return {
    text: text,
    fillFlag: state.fill,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeColor(color) {
      dispatch(changeColor(color));
    },
    newPath() {
      dispatch(newPath());
    },
    toggleFillFlag() {
      dispatch(toggleFillFlag());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)