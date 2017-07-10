function getDiv(){
	var num1=parseInt(document.getElementById("num1").value);
	var num2=parseInt(document.getElementById("num2").value);
	var num3;
	if(num2==0)
	{
		alert("Second number cannot be 0");
		
	}
	else
	{
		num3=num1/num2;
		document.write(num3);
	}
}