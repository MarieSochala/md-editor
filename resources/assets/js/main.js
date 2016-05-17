'use strict'
var $ = require('jquery');
var marked = require('marked');
var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');


var Mrkdwn = React.createClass({
	componentDidMount: function() {
		this.setState({
			code: localStorage.getItem("newText")
		});
	},
	getInitialState: function() {
		return {
			code: ""
		};
	},
	
	updateCode: function(newCode) {
		this.setState({
			code: newCode
		});
		
	var textupdate = marked(newCode);
	$('#reponseHtml').html(textupdate);
	localStorage.setItem("newText", newCode);
	},

	render: function() {
		var myCodeMirrorEditor = {
		lineNumbers: true,
		highlightFormatting: true,
		matchBrackets: true,
		mode:  "markdown"
	};
		return <Codemirror value={this.state.code} onChange={this.updateCode} options={myCodeMirrorEditor} />
	}
});


var Menu = React.createClass({

 render: function() {
 	return (
 		<nav><button onClick={this.props.onTroll}>Yo</button></nav>
 		);
 }


});
var Wrapper = React.createClass({
	doubletroll: function(){
alert('troooll');
	},
 render: function() {
 	return (
 		<div>
 		<Menu onTroll={this.doubletroll} />
 		<Mrkdwn />
 		</div>
 		);
 }

});


//$('#efface').on('click', function() {
// 	location.reload();
// });

ReactDOM.render(
  <Wrapper />,
  document.getElementById('editor')
);
	