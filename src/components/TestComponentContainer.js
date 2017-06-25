
import TestComponent from './TestComponent';
import {connect} from 'react-redux';
import {dummyAction} from '../actions/appActions';

function mapStateToProps(state) {
  return {
    text: 'Action fired: ' + state.actionFired
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick() {
      dispatch(dummyAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)