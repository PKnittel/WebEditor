import DrawArea from './DrawArea';
import {connect} from 'react-redux';
import {addPoint} from '../../actions/appActions';

function mapStateToProps(state) {
  let pathes = state.pathes;
  pathes.push({
    points:state.points,
    color: state.color
  });

  return {
    d: state.points.reduce(function(result, d, i) {
      const operation = i === 0 ? 'M' : ' L';
      return result + operation + d.x + ' ' + d.y;
    }, ''),
    color: state.color,
    pathes: pathes,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(proxy, event) {
      const offset = proxy.target.getBoundingClientRect();

      const point = {
        x: proxy.pageX - offset.left,
        y: proxy.pageY - offset.top
      }
      dispatch(addPoint(point));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawArea)