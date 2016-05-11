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

	//modif
	updateCode: function(newCode) {
		//modification de l'état
		this.setState({
			code: newCode
		});
		// modif du markdown en html dans la div hello
	var textupdate = marked(newCode);
	$('#reponseHtml').html(textupdate);
	
	},

	render: function() {
		//options codemirror en markdown
		var myCodeMirrorEditor = {
		lineNumbers: true,
		highlightFormatting: true,
		matchBrackets: true,
		mode:  "markdown"
	};
	//value > String the markdown /fonction onChange appelée quand un changement est fait /options passées à CodeMirror 
		return <Codemirror value={this.state.code} onChange={this.updateCode} options={myCodeMirrorEditor} />
	}
});


ReactDOM.render(
  <Mrkdwn />,
  document.getElementById('editor')
);
	