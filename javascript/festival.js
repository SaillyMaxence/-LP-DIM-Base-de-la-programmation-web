$(function() {
	
	if(sessionStorage.getItem('user')){
		$("#notConnected").hide();
	}
	else{
		$("#connected").hide();
	}
});