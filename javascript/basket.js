$(function() {
	
	if(sessionStorage.getItem('user')){
		$("#notConnected").hide();
	}
	else{
		$("#connected").hide();
	}


	var tbody = document.getElementById("panier");

	if(sessionStorage.getItem("MyBasket")){
		var basket = sessionStorage.getItem("MyBasket");
		basket = ("["+basket+"]");
		basket = JSON.parse(basket);
		console.log(basket.length);

		for(i=0; i< basket.length; i++){
			firstTr = document.createElement("tr");
			firstTd = document.createElement("td");
			firstTd.setAttribute("id","product");
			firstTd.setAttribute("data-th","Product");
			firstDiv = document.createElement("div");
			firstDiv.classList.add("row");
			secondDiv = document.createElement("div");
			secondDiv.classList.add("col-sm-2","hidden-xs");
			img = document.createElement("img");
			img.setAttribute("src", basket[i].photo);
			img.setAttribute("alt", basket[i].Nom);
			img.classList.add("img-responsive");
			thirdDiv = document.createElement("div");
			thirdDiv.classList.add("col-sm-10");
			h4 = document.createElement("h4");
			h4.classList.add("nomargin");
			h4.innerHTML = basket[i].Nom;
			p = document.createElement("p");
			p.innerHTML = basket[i].Description;
			secondTd = document.createElement("td");
			secondTd.setAttribute("data-th","Price");
			secondTd.innerHTML = basket[i].Prix;


			thirdDiv.appendChild(h4);
			thirdDiv.appendChild(p);
			
			secondDiv.appendChild(img);
			firstDiv.appendChild(secondDiv);
			firstDiv.appendChild(thirdDiv);
			firstTd.appendChild(firstDiv);
			firstTr.appendChild(firstTd);
			firstTr.appendChild(secondTd);
			tbody.appendChild(firstTr);
		}

	}
	else{
		container = document.getElementById("panierElement");
		container.innerHTML ="<h3><strong>Votre panier est vide.</h3></Strong>";
	}


	










	$("#test").click(function(){
		var basket = sessionStorage.getItem("MyBasket");
		basket = ("["+basket+"]");
		console.log(basket);
		var basket2 = JSON.parse(basket);
		console.log(basket2);
	})
});