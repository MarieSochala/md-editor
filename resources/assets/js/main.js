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
		console.log(this);
		setTimeout(()=>{
			debugger;
			},3000)
		
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
		return <Codemirror ref={(ref)=>{this.editor=ref}} value={this.state.code} onChange={this.updateCode} options={myCodeMirrorEditor} />
	}
});


var Nouveaudoc = React.createClass({
   render: function() {
       return (
           <div>
               <a className="waves-effect waves-light btn grey" onClick={this.props.deltext}>
               <i className="material-icons right">mode_edit</i>Nouveau document</a>
           </div>
       );
   }
});

var Sauvegarder = React.createClass({
   render: function() {
       return (
           <div>
               <a className="waves-effect waves-light btn grey" onClick={this.props.deltext}>
               <i className="material-icons right">done</i>Sauvegarder</a>
           </div>
       );
   }
});

var Telecharger = React.createClass({
   render: function() {
       return (
           <div>
               <a className="waves-effect waves-light btn grey" onClick={this.props.deltext}>
               <i className="material-icons right">play_for_work</i>Télécharger</a>
           </div>
       );
   }
});


var Wrapper = React.createClass({
	getInitialState: function() {
		console.log("getInitialState");
return{
	code:""
};
	},
	dbletroll: function() {
		console.log("dbletroll");
		this.setState({
			code: localStorage.clear()
	});
		$
		
return 
	<Mrkdwn value={this.state.code} />

	},


 	render: function() {
 	return (
 		<div>
 		<Mrkdwn />
 		<Nouveaudoc deltext={this.dbletroll} />
 		<Telecharger deltext={this.dbletroll} />
 		<Sauvegarder deltext={this.dbletroll} />
 		</div>
 		);
 	}
});


ReactDOM.render(
  <Wrapper />,
  document.getElementById('editor')
);
	