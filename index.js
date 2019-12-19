
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function Welcome(props) {
  return<h1>Hello, {props.name} Age {props.age}</h1>;
}

var App =(
  <div>
      <Welcome name="Sara" age="24" />
      <Welcome name="Cahal"  age="24"/>
      <Welcome name="Edite" age="24"/>
    </div>
);
    

ReactDOM.render(
 App,
  document.getElementById('root')
);
