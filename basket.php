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

		<h2> Votre panier </h2>
		<table id="cart" class="table table-hover table-condensed">
			<thead>
				<tr>
					<th style="width:50%">Produit</th>
					<th style="width:10%">Prix</th>
					<th style="width:8%">Quantité</th>
					<th style="width:22%" class="text-center">Sous-totaux</th>
					<th style="width:10%"></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td id="product" data-th="Product">
						<div class="row">
							<div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div>
							<div class="col-sm-10">
								<h4 class="nomargin">Product 1</h4>
								<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</td>
					<td data-th="Price">$1.99</td>
					<td data-th="Quantity">
						<input type="number" class="form-control text-center" value="1">
					</td>
					<td data-th="Subtotal" class="text-center">1.99</td>
					<td class="actions" data-th="">
						<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
						<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>								
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr class="visible-xs">
					<td class="text-center"><strong>Total : </strong></td>
				</tr>
				<tr>
						<td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continuez le shopping</a></td>
					<td colspan="2" class="hidden-xs"></td>
					<td class="hidden-xs text-center"><strong>Total $1.99</strong></td>
					<td><a href="#" class="btn btn-success btn-block">Continuez<i class="fa fa-angle-right"></i></a></td>
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