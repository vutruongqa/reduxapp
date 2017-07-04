var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

//load foundation, nice library for CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>Redux example</p>,
    document.getElementById('app')
);

require('./redux-todo-example');