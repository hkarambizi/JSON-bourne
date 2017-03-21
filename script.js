
//1. Mission one

$('#mission_one_btn').on("click", function() {
	$.get('https://api.myjson.com/bins/1680y')
		.done(function(data){
		console.log(data);
		})
		.fail(function(error) {
		console.log(error)
		})
});

//Mission Two

$('mission_two_btn').on("click", function() {
	var data = $.get('https://api.myjson.com/bins/1680y');
	$.ajax({
	    url:"https://api.myjson.com/bins",
	    type:"POST",
	    data: data.passphrase,
	    contentType:"application/json; charset=utf-8",
	    dataType:"json",
	    })
		.done(function(data){
		console.log(data);
		})
		.fail(function(error) {
		console.log(error)
		})
});    