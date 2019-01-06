$(function(){
	$("#submitButton").click(function (e){
		e.preventDefault();

		var mail = document.getElementById("mail");	
		var pass = document.getElementById("password");
		var alert = document.getElementById("alert");
		if(mail.value != "" && pass.value != ""){
			var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');

			if(reg.test(mail.value)){
				if(localStorage.getItem(mail.value)){
					var myUser = JSON.parse(localStorage.getItem(mail.value));
					console.log(myUser.mail);
					if(myUser.pass == pass.value){
						e.preventDefault();
						sessionStorage.setItem('user', myUser.name);
						document.location.href="index.php";
					}
					else{
						alert.innerHTML = "Mot de passe / Adresse mail non reconnu.";
						$("#alert").fadeIn();

					}
					
				}	


				else{
					alert.innerHTML = "Adresse mail ou mot de passe invalide";
					$("#alert").fadeIn();
				}
			}else{
				alert.innerHTML = "Mail non valide";
				$("#alert").fadeIn();
			}

		}
		else{
			alert.innerHTML = "Adresse mail ou mot de passe non renseigné";
			$("#alert").fadeIn();	
		}




	});
	

})


$("input").on('click',function(){
	$("#alert").fadeOut();
});