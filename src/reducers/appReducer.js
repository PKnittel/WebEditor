const appReducer = (state = {
  actionFired: false,
  sampleText: 'Test text',
  pathes: [],
  points: [],
  color: 'black',
  fill: false
}, action) => {
  switch (action.type) {
    case 'DUMMY_ACTION':
      return {
        ...state,
        actionFired: !state.actionFired
      }
    case 'ADD_POINT': {
      let points = state.points;
      points.push(action.payload);
      return {
        ...state,
        points: points
      }
    }
    case 'CHANGE_COLOR': {
      return {
        ...state,
        color: action.payload
      }
    }
    case 'NEW_PATH': {
      const pathes = state.pathes.concat({
        points: state.points,
        color: state.color,
        fill: state.fill
      });
      return {
        ...state,
        pathes: pathes,
        points: []
      }
    }
    case 'TOGGLE_FILL_FLAG': {
      return {
        ...state,
        fill: !state.fill
      }
    }
    default:
      return state
  }
}

export default appReducer