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
	
	<!-- Panier -->

	<div class="container">

		<h2 id="panierElement"> Votre panier </h2>
		<table id="cart" class="table table-hover table-condensed">
			<thead>
				<tr>
					<th style="width:50%">Produit</th>
					<th style="width:10%">Prix</th>
					<th style="width:10%"></th>
				</tr>
			</thead>
			
			<tbody id="panier">

			</tbody>
			<tfoot>
				<tr class="visible-xs">
					<td class="text-center"><strong>Total : </strong></td>
				</tr>
				<tr>
						<td><a href="index.php" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continuez le shopping</a></td>
					<td colspan="2" class="hidden-xs"></td>
					<td><a href="#" id="test" class="btn btn-success btn-block">Continuez<i class="fa fa-angle-right"></i></a></td>
				</tr>
			</tfoot>
		</table>
	</div>



	<!-- Fin panier -->

	<!-- Footer -->

	<?php include_once("includes/footer_inc.php"); ?>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>	
	<script src="javascript/basket.js"></script>
</body>
</html>