import DrawArea from './DrawArea';
import {connect} from 'react-redux';
import {addPoint} from '../../actions/appActions';

function mapStateToProps(state) {
  let pathes = state.pathes.concat([{
    points:state.points,
    color: state.color,
    fill: state.fill
  }]);

  return {
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