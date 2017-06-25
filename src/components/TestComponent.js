import React from 'react'
import PropTypes from 'prop-types'

const TestComponent = function(props) {
  return (<div onClick={props.onClick}>
      {props.text}
    </div>);
}

TestComponent.propTypes = {
  text: PropTypes.string
}

export default TestComponent