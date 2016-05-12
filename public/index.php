<?php
session_start ();

if (isset($_POST["titre"])) {
	// Enregistrement paramètres comme variables de session 
	$titre = $_POST["titre"];
	$theEditor = $_POST["theEditor"];
	$_SESSION["titre"]= $theEditor;
}

if (isset($_POST["titreRegistered"])) {
	$titre = $_POST["titreRegistered"];
	if (isset($_SESSION["$titre"])) {
		$data = $_SESSION["titre"];
	}
}

else {
	echo 'youhou je ne connais pas ce titre';
}
