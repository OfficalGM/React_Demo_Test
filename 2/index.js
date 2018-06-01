import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
  <div>
    {
      names.map(function (name) {
        return <div>Hello, {name}!</div>
      })
    }
  </div>,
  document.getElementById('example')
);