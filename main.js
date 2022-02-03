var a = document.getElementById("#icon");
var b = document.getElementById("#icon2");

function nam() 
{
    console.log("hi world");
    document.getElementById("icon2").style.display = 'block';
    document.getElementById("topnav").style.display = 'block';
    b.style.display = 'block';
    document.getElementById("htwo").style.display = 'none';
    document.getElementById("hfour").style.display = 'none';
    document.getElementById("para").style.display = 'none';
      
}
function rev() 
{
    console.log("hi world"); 
    document.getElementById("icon2").style.display = 'none';
    document.getElementById("topnav").style.display = 'none';
    a.style.display = 'block';
    document.getElementById("htwo").style.display = 'block';
    document.getElementById("hfour").style.display = 'block';
    document.getElementById("para").style.display = 'block';
      
}