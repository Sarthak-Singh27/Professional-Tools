first();

function first()
{

document.getElementById('magic').style.color="red";

// document.getElementById('first').style.color="#32A067";

setTimeout(second,1000);

}


function second()
{

document.getElementById('magic').style.color="green";
// document.getElementById('second').style.color="#32A067";

setTimeout(third,1000);

}



function third()
{

    document.getElementById('magic').style.color="blue";

setTimeout(first,1000);


}