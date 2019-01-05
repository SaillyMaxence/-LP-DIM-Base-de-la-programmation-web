$(function() {
	
	if(sessionStorage.getItem('user')){
		$("#notConnected").hide();
	}
	else{
		$("#connected").hide();
	}

	jQuery.when(
		jQuery.getJSON('json/articles.json')
		).done( function(json) {
			
			var elementToSave = document.getElementById('album');

			myPanel = document.createElement("div");
			myPanel.classList.add("container");
			

			row = document.createElement("div");
			row.classList.add("row");
			





			console.log(json.Album.length);
			for(var i=0; i<json.Album.length;i++){
				console.log(json.Album[i].Nom);
				console.log(json.Album[i].Description);
				console.log(json.Album[i].Couverture);
				console.log(json.Album[i].Artiste);
				console.log(json.Album[i].Sortie);

				col = document.createElement("div");
				col.classList.add("col-sm-4");
				pan = document.createElement("div");
				pan.classList.add("panel","panel-default");
				head = document.createElement("div");
				head.classList.add("panel-heading");
				h3Element = document.createElement("h3");
				h3Element.innerHTML = json.Album[i].Nom;
				h3Element.setAttribute("style","margin:0")
				body = document.createElement("div");
				body.classList.add("panel-body");


				/* Création des éléments pour le body du panel */ 
				img = document.createElement("img");
				img.setAttribute("src", json.Album[i].Couverture);
				img.classList.add("img-responsive");
				img.setAttribute("style","width:80%; margin:auto;");
				img.setAttribute("alt","test");

				desc = document.createElement("p");
				desc.innerHTML = json.Album[i].Description;

				auteur = document.createElement("p");
				auteur.innerHTML = "<b>artiste :</b> "+json.Album[i].Artiste;

				prix = document.createElement("p");
				prix.setAttribute("style","text-align:right");
				prix.innerHTML=json.Album[i].Prix;


				footer = document.createElement("div");
				footer.classList.add("panel-footer");

			// boutton market 

			button = document.createElement("p");
			button.setAttribute("style","margin-left:180px; width:150px;")
			button.classList.add("btn","btn-primary");
			button.innerHTML = '<i class="fa fa-beer"></i>';

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


	});
	});
