function getAge(){
	var date= new Date();	
	var year=date.getFullYear();
	var age=parseInt(document.getElementById("age").value);
	var yr=year-age;
	document.write("you were born in " + yr);
}