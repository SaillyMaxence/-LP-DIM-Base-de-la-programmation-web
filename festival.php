<!DOCTYPE html>
<html>
<head>
	<?php include_once("includes/head_inc.php") ?>
</head>
<body>


	<!--  HEADER -->
	<?php include_once("includes/header_inc.php") ?>

	<!-- Nav Bar -->
	
	<div id="notConnected"><?php   include_once("includes/navbar_inc_disconnected.php"); ?></div>
	<div id="connected"><?php   include_once("includes/navbar_inc_connected.php"); ?></div>
	

	<!-- Album -->


	<div id="Festival"> <!-- Album généré automatiquement via le Json --></div>


	<?php include_once("includes/footer_inc.php"); ?>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>	
	<script src="javascript/festival.js"></script>
</body>
</html>