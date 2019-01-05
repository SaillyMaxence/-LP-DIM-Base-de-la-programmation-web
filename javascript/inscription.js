$(function() {
	$("#submitButton").click(function (e){
		e.preventDefault();

		var mail = document.getElementById("mail");
		var name = document.getElementById("name");
		var pass = document.getElementById("password");
		var alert = document.getElementById("alert");
		if( mail.value == "" || name.value == "" || pass.value == ""){

			alert.innerHTML = "Veuillez renseigner les informations ci-dessous pour continuer l'Inscription";
			$("#alert").fadeIn();
		}	


		if (mail.value != "" && name.value != "" && pass.value !=""){
			var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');

			if(reg.test(mail.value)){
				var user = JSON.stringify({
					mail : mail.value,
					name : name.value,
					pass : password.value
				});
				 localStorage.setItem(mail.value,user);
				 document.location.href="index.php";
			}else{
				alert.innerHTML = "Mail non valide";
				$("#alert").fadeIn();
			}
		}

	})



});


$("input").on('click',function(){
	$("#alert").fadeOut();
});