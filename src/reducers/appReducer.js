const appReducer = (state = {
  actionFired: false,
  sampleText: 'Test text',
  points: []
}, action) => {
  switch (action.type) {
    case 'DUMMY_ACTION':
      return {
        ...state,
        actionFired: !state.actionFired
      }
    case 'ADD_POINT':
      let points = state.points;
      points.push(action.payload);
      return {
        ...state,
        points: points
      }
    default:
      return state
  }
}

export default appReducer