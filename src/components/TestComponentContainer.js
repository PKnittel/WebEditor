import TestComponent from './TestComponent';
import {connect} from 'react-redux';
import {dummyAction, addPoint} from '../actions/appActions';

function mapStateToProps(state) {
  console.log(state);

  const text = state.points.reduce(function(result, d, i) {
      return result + ' ' + i + ': X' + d.x + ' Y' + d.y;
    }, 'Points: ');

  const path = state.points.reduce(function(result, d, i) {
      return result + ' L' + d.x + ' ' + d.y;
    }, 'M0 0');
  return {
    text: text,
    d: path,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(proxy, event) {
      const offSetTop = proxy.target.getBoundingClientRect().top;
      const offSetLeft = proxy.target.getBoundingClientRect().left;

      const point = {
        x: proxy.pageX - offSetLeft,
        y: proxy.pageY - offSetTop
      }

      console.log(point);

      dispatch(dummyAction());
      dispatch(addPoint(point));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)