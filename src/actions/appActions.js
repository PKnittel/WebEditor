
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

export function changeColor(color) {
  return {
    type: 'CHANGE_COLOR',
    payload: color
  }
}

export function newPath() {
  return {
    type: 'NEW_PATH'
  }
}
