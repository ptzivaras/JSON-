/*
Usually you load jason from another url with a database
Learn JASON,Java  Script  Object  Notation 
The Following is an object 
var myCat = {
    "name": "Meowsalot",
    "species": "cat",
    "favFood": "tuna"
}
The Following is an Array
var myFavColors = ["blue","green","purple"];

var thePets =[
    {
        "name": "Meowsalot",
        "species": "cat",
        "favFood": "tuna"    
    },
    {
        "name": "barky",
        "species": "dog",
        "favFood": "carrots"
    }
]

Access 2nd .causeObject
thePets[1].favFood  return value of carrots
.................................................
The process of sending or receiving data on the fly without page reload is known as AJAX
*/

/*
XMLHttpRequest ll establiss connection with thr url we want and helps receive or send data
Method=open. send/receive data = POST/GET , url we want to talk to
onload=fuction{
    this is what should hapen once data is loaded
}
AJAX
Asynchronous Javascript and xml
*/
var pageCounter = 1;
var animalContainer=document.getElementById("animal-info");
var btn=document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest= new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter +'.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    var htmlstring = "";

    for(i=0;i<data.length;i++){
        htmlstring += "<p>" + data[i].name + "is a" + data[i].species + ".</p>";
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlstring);
}

