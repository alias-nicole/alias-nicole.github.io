

var textarea = document.getElementById("userInput");

function hello() {
    document.getElementById("userInput").style.fontSize = "24pt";
}

function change(){

    if(document.getElementById("fancy").checked)
    {
        document.getElementById("userInput").style.fontWeight="bold";
        document.getElementById("userInput").style.color="blue";
        document.getElementById("userInput").style.textDecoration="underline"
        alert("styles added to the text area");
    }
    else if (document.getElementById("boring").checked)
    {
        document.getElementById("userInput").style.fontWeight="normal";
        document.getElementById("userInput").style.color="black";
        document.getElementById("userInput").style.textDecoration="none"
        alert("styles removed from the text area");
    }
}


function makeMoo(){
    document.getElementById("userInput").style.textTransform="uppercase"
    let str=document.getElementById("userInput").value.split(".");
    let str2=str.join("-Moo");
    document.getElementById("userInput").value=str2;
}