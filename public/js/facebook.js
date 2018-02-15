function changeUser(response){
	console.log(response);
	$(".facebookLogin").hide();
	$("h1").text(response.name);
	$("#photo").attr("src", response.picture.data.url);
}