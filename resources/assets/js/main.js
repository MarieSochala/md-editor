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

	//initialisation 
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
	$('#hello').html(textupdate);
	
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

ReactDOM.render(
  <Mrkdwn />,
  document.getElementById('editor')
);
	