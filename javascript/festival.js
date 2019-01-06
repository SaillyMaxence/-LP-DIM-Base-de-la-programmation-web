$(function() {
	var once = false;
	if(sessionStorage.getItem('user')){
		$("#notConnected").hide();
	}
	else{
		$("#connected").hide();
	}

	jQuery.when(
		jQuery.getJSON('json/articles.json')
		).done( function(json) {
			
			var elementToSave = document.getElementById('Festival');

			myPanel = document.createElement("div");
			myPanel.classList.add("container");
			

			row = document.createElement("div");
			row.classList.add("row");
			






			for(var i=0; i<json.Festival.length;i++){

				col = document.createElement("div");
				col.classList.add("col-sm-4");
				pan = document.createElement("div");
				pan.classList.add("panel","panel-default");
				head = document.createElement("div");
				head.classList.add("panel-heading");
				h3Element = document.createElement("h3");
				h3Element.innerHTML = json.Festival[i].Nom;
				h3Element.setAttribute("style","margin:0")
				body = document.createElement("div");
				body.classList.add("panel-body");


				/* Création des éléments pour le body du panel */ 
				img = document.createElement("img");
				img.setAttribute("src", json.Festival[i].Couverture);
				img.classList.add("img-responsive");
				img.setAttribute("style","width:80%; margin:auto;");
				img.setAttribute("alt","test");

				desc = document.createElement("p");
				desc.innerHTML = json.Festival[i].Description;

				auteur = document.createElement("p");
				auteur.innerHTML = "<b>Date :</b> "+json.Festival[i].Date;

				prix = document.createElement("p");
				prix.setAttribute("style","text-align:right");
				prix.innerHTML=json.Festival[i].Prix;


				footer = document.createElement("div");
				footer.classList.add("panel-footer");

			// boutton market 

			button = document.createElement("p");
			button.setAttribute("style","margin-left:180px; width:150px;background-color:#333;color:white;");
			button.classList.add("btn","btn-dark");
			button.setAttribute("id","addToCart");
			button.setAttribute("data-id",json.Festival[i].Id);
			button.innerHTML = '<i class="fa fa-cart-plus"></i>';

			// append pour body.	
			body.appendChild(img);
			body.appendChild(desc);
			body.appendChild(auteur);
			body.appendChild(prix);


			footer.appendChild(button);


			/* Append */

			head.appendChild(h3Element);
			pan.appendChild(head);
			pan.appendChild(body);
			pan.appendChild(footer);
			col.appendChild(pan);
			row.appendChild(col);
			myPanel.appendChild(row);
			elementToSave.appendChild(myPanel);



		}

		$("body").on( "click","#addToCart", function() {
			console.log("oui on click");

			if(sessionStorage.getItem('MyBasket')){
				console.log("panier existant");
				
				var x = sessionStorage.getItem("MyBasket");
				console.log(x);

				var  id =  this.getAttribute("data-id")
				var add = JSON.stringify({
					Nom: json.Festival[id].Nom,
					Description: json.Festival[id].Description,
					Prix : json.Festival[id].Prix,
					photo : json.Festival[id].Couverture

				});

				var test = [];
				test = x;
				
				finalString = (test+","+add);
				

				sessionStorage.setItem("MyBasket",finalString);
			}
			else{
				var  id =  this.getAttribute("data-id")
				var add = JSON.stringify({
					Nom: json.Festival[id].Nom,
					Description: json.Festival[id].Description,
					Prix : json.Festival[id].Prix,
					photo : json.Festival[id].Couverture

				});
				sessionStorage.setItem("MyBasket",add);


		// on ajoute l'item 
	}



});
	});







	});


