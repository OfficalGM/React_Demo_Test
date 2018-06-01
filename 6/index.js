import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class MyTitle extends React.Component {
  render() {
      return <h1> {this.props.title} </h1>;
  }
  
}
MyTitle.defaultProps={
  title:"String"
}
MyTitle.propTypes={
  title:PropTypes.string.isRequired
}
ReactDOM.render(
  <MyTitle />,
  document.getElementById('example')
);