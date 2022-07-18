
function myfuction()
{
    var element = document.getElementById("list");

    // console.log(element.className);

    if(element.className === "nav-li")
    {
        element.className += " responsive";
    }
    else{
        element.className = "nav-li";
    }
}