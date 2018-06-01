import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);