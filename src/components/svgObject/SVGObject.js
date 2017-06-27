import React from 'react'
import PropTypes from 'prop-types'

export default function SVGObject(props) {
  return (<path d={props.d} stroke={props.stroke} fill={props.fill}/>);
}

SVGObject.propTypes = {
  d: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
}