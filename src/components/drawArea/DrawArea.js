import React from 'react';
import PropTypes from 'prop-types';
import SVGObject from '../svgObject/SVGObject';

const style = {
  border: '2px solid black',
  height: '300px'
};

function generateDescription(points){
    return points.reduce(function(result, d, i) {
      const operation = i === 0 ? 'M' : ' L';
      return result + operation + d.x + ' ' + d.y;
    }, '');
};

function getSVGObjects(pathes){
  return pathes.map(function(element, i){
    if (!element.points) return '';
    const description = generateDescription(element.points);
    return (<SVGObject d={description} stroke={element.color} fill='none'/>);
  });
};

export default function DrawArea(props) {
  return (<div className="drawErea" onClick={props.onClick} style={style}>
    <svg height="300" width="1400">
		  <SVGObject d={props.d} stroke={props.color} fill='none'/>
      {getSVGObjects(props.pathes)}
		</svg>
  </div>);
}

DrawArea.propTypes = {
  d: PropTypes.string,
  color: PropTypes.string
}