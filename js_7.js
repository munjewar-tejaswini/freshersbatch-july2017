function getFact()
{
	var fact=1;
	var num=parseInt(document.getElementById("num").value)
	while(num>0)
	{
		fact=fact*num;
		num--;
	}
	document.write(fact);
}
