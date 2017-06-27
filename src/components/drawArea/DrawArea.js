import React from 'react';
import PropTypes from 'prop-types';
import SVGObject from '../svgObject/SVGObject';

const style = {
  border: '2px solid black',
  height: '300px'
};

export default function DrawArea(props) {
  return (<div className="drawErea" onClick={props.onClick} style={style}>
    <svg height="300" width="1400">
		  <SVGObject d={props.d} stroke={props.color} fill='none'/>
		</svg>
  </div>);
}

DrawArea.propTypes = {
  d: PropTypes.string,
  color: PropTypes.string
}