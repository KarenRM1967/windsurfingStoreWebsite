function dateFunction()
{
	var rightNow = new Date();
	var theMonth = 0;
	theMonth = rightNow.getMonth() + 1;
	rightNow = rightNow.getFullYear() + '/' + theMonth + '/' + rightNow.getDate();
	document.getElementById("showDate").innerHTML = rightNow;
}
function changeColor()
{
	document.getElementById("changeColor").style.color = "green";
	document.getElementById("changeColor").style.borderWidth = "0.3em";
	document.getElementById("changeColor").style.borderStyle = "dotted";
	document.getElementById("changeColor").style.borderColor = "yellow";
}

