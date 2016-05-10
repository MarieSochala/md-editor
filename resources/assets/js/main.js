
var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');

var myCodeMirrorEditor = CodeMirror(document.body, {
  lineNumbers: true,
  lineWrapping: true,
  highlightFormatting: true,
  mode:  "markdown"
});


ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('hello')
);