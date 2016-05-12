<?php
session_start ();
//test si les variables sont définies
if (isset($_POST['titre']) && isset($_POST['telecharger']) && isset($_POST['dwnld'])) {
	// Enregistrement paramètres comme variables de session 
	$_SESSION['titre'] = $_POST['titre'];
	$_SESSION['telecharger'] = $_POST['telecharger'];
	
	$_SESSION['dwnld'] = $_POST['dwnld'];

else {
	echo 'youhou';
}