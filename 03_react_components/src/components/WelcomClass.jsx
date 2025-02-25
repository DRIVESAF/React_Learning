import { Component } from "react";
import PropTypes from "prop-types";
 
class WelcomClass extends Component{
  render(){
    return <h1>Hello World,{this.props.name}</h1>;
  }
}

WelcomClass.propTypes={
  name:PropTypes.string,
};

export default WelcomClass; 