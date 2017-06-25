const appReducer = (state = {
  actionFired: false
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