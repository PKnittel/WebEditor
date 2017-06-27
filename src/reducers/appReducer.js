const appReducer = (state = {
  actionFired: false,
  sampleText: 'Test text',
  pathes: [],
  points: [],
  color: 'black'
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
      const currentPath = {
        points: state.point,
        color: state.color
      };
      const pathes = state.pathes;
      pathes.push(currentPath);
      return {
        ...state,
        pathes: pathes,
        points: []
      }
    }
    default:
      return state
  }
}

export default appReducer