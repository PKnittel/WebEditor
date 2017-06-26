
export function dummyAction() {
  return {
    type: 'DUMMY_ACTION',
  }
}

export function addPoint(point) {
  return {
    type: 'ADD_POINT',
    payload: point
  }
}