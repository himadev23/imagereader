$(document).ready(function(){
	alert("hello")
	$('#submit').on('click',function(){
		$('#images').empty();
		$.get('/image',function(data){
			console.log("data=====",data)

		})
	})
})