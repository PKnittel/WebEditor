const appReducer = (state = {
  actionFired: false,
  sampleText: 'Test text'
}, action) => {
  switch (action.type) {
    case 'DUMMY_ACTION':
      return {
        ...state,
        actionFired: !state.actionFired
      }
    default:
      return state
  }
}

export default appReducer