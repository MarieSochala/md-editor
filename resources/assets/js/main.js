'use strict'
var $ = require('jquery');
var marked = require('marked');
var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

//creation de Mrkdwn avec React
var Mrkdwn = React.createClass({

	componentDidMount: function(){
		this.setState({
			code:localStorage.getItem("newText")
		});
	},
	getInitialState: function() {

		return {
			code: " "
		};
	},

	//permission de faire du marked
	updateCode: function(newCode) {
		//modification de l'état
		this.setState({
			code: newCode
		});
		// modif du markdown en html dans la div hello
	var textupdate = marked(newCode);
	$('#reponseHtml').html(textupdate);
	// localStorage mis en place pour récupérer les donnees tapees
	localStorage.setItem("newText", newCode);

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
	