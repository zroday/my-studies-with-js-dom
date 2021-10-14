//scalable node
console.dir(document.children[0].children[1].children[6].childNodes[0].nodeValue);
document.children[0].children[1].children[6].childNodes[0].nodeValue = "Updated value!";

//webpage url print in console
console.log(document.URL);

//print document directory
console.dir(document);

//js object1
var myFamily1 = {
    "dad": "Laurence",
    "aunt": "Jane",
    "uncle": "Bob"
}

//js object2
var myFamily2 = {
    "Laurence": {
        "Mike": 12,
        "Lisa": 9,
        "John": 6
    },
    "Jane": {
        "Sam": 12,
        "George": 9,
        "John": 6
    },
    "Bob": {
        "Bob Jr": 12,
        "Mike": 9,
        "Lisa": 6
    }
}

//print object2
console.log(myFamily2);

//print object3
console.log(myFamily1);

//print windows directory
console.dir(window);

//write on the webpage
window.document.write("Hello World Again");

//search element and replace string, color
var props = window.document.getElementById("propOut");
props.style.color = "black";
props.innerHTML = "This text was changed by DOM";
props.childNodes[0].nodeValue = "New value by NodeValue";
console.log("Color of propOut has been changed");

//===================================================

//this function changes the text color
function leop(){
    props.style.color = "blue";
    console.log("clicked");
}

//find the li element and print to the console
var onListObject = window.document.getElementsByTagName("li");
console.log(onListObject);
for (let index = 0; index < onListObject.length; index++) {
    const element = onListObject[index];
    console.log("Content " + index + ": " + element.textContent);
}

//get src attribute

var myImg = window.document.getElementById("myImg");


console.log(myImg.getAttribute("src"));
//set img size
function resizeImg(){
    var resizeNow = {
        "width": myImg.style.width = "800px",
        "height": myImg.style.height = "400px"
        
    }
    
    return resizeNow;
}


//querySelector examples
var qsSingle = window.document.querySelector("li"); // return first element of the query li
var qsAll = window.document.querySelectorAll("ul > li"); // return all elements of the query li



for (let index = 0; index < qsAll.length; index++) { // change all elements colors 
    const element = qsAll[index].style.backgroundColor = "blue";
    
}

qsSingle.style.backgroundColor = "black"; // change first element color

console.log(qsSingle);
console.log(qsAll);


//Traversing the Dom
var iitems = window.document.getElementsByTagName('div')[2];
console.dir(iitems.firstChild.nextSibling.previousSibling.parentElement);


//Append and Remove Elements using Js
var nEle = window.document.createElement('div');
nEle.innerHTML = "FIVE";
var a = window.document.querySelectorAll('div.yellow');
a[0].appendChild(nEle);
//a[0].removeChild(nEle);
//a[0].removeChild(a[0].childNodes[0]);

//Add Event Listeners to Elements Using Js
var output = document.getElementById('output');
output.onclick = () => {
    console.log("Click One");
    
}; 

output.addEventListener("click", () => {console.log("Click Two");});

//Open image popup window
var getImg = window.document.getElementsByTagName('img');
for(var x = 0; x < getImg.length; x++){
    getImg[x].onclick = () =>{
        window.open(this.src, "My Image", 'resizable=yes, scrollbars=yes, width=800, height=600');
        window.resizeTo(800 / 2, 400 / 2);
        window.screenX = Math.PI = 800 * 2 + this.window.scrollY;
    }
}

