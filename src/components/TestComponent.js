import React from 'react';
import PropTypes from 'prop-types';
import DrawAreaContainer from './drawArea/DrawAreaContainer';

const style = {
  border: '2px solid black',
  height: '300px'
};

export default function TestComponent(props) {
  return (<div className="drawErea" onClick={props.onClick}>
      Drawcolor: {props.text} <br/>
			<button type="button" onClick={props.changeColor.bind(this, 'blue')}>Blue</button>
			<button type="button" onClick={props.changeColor.bind(this, 'green')}>Green</button>
			<button type="button" onClick={props.changeColor.bind(this, 'red')}>Red</button>
			<button type="button" onClick={props.changeColor.bind(this, 'black')}>Black</button>
      <DrawAreaContainer/>
    </div>);
}

TestComponent.propTypes = {
  text: PropTypes.string,
  d: PropTypes.string
}