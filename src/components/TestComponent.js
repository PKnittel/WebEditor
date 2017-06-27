import React from 'react'
import PropTypes from 'prop-types'

const style = {
  border: '2px solid black',
  height: '300px'
};

export default function TestComponent(props) {
  return (<div className="drawErea" onClick={props.onClick}>
      {props.text}
      <div style={style}>
	      <svg height="300" width="1400">
				  <path d={props.d} stroke='blue' fill='none'/>
				</svg>
			</div>
    </div>);
}

TestComponent.propTypes = {
  text: PropTypes.string,
  d: PropTypes.string
}