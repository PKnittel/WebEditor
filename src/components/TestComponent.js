import React from 'react'
import PropTypes from 'prop-types'

const style = {
  border: '2px solid black',
  height: '400px'
};

export default function TestComponent(props) {
  return (<div className="drawErea" onClick={props.onClick} style={style}>
      {props.text}
    </div>);
}

TestComponent.propTypes = {
  text: PropTypes.string
}