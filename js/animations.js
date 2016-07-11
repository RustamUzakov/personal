$(document).ready(function(){

	console.log("test");




$("#archAbout").click(function(){

	console.log("arch is clicked");
		$("#textArch").slideToggle(600);	

})


$("#compAbout").click(function(){

	console.log("arch is clicked");
		$("#textComp").slideToggle(600);	

})
	
$(".pulse").click(function(){
	$("iC").removeClass("pulse");
	console.log("pulse is clicked");
		$("#graph").slideDown(1500);
		
});



})