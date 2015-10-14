/*
Andre.age;
Andre['weight'];

 a == b сравнивание 11 = "11"
 a === b сравнивание 11 = 11

 document
 getElementByID ('id')
 getElementByName ('name')
 querySelector()
 localStorage.setItem (key, value)
 localStorage.getItem (key, value)
 */
var header = document.getElementById('header');
var image = document.getElementsByClassName('image')[0];
var button = document.querySelector('button');
var button2 = document.getElementById('button2');

function setName (){
    var name = prompt("What is your name?");
    localStorage.setItem('name', name);
    header.innerHTML = 'Hello, ' + name;
}

if (localStorage.getItem('name')) {
    header.innerHTML = 'Hello, ' + localStorage.getItem('name');
} else {
    setName ();
}

function changeImage () {
    var currentImage = image.getAttribute('src');
    if (image.getAttribute('src')  === '2.jpg') {
        image.setAttribute('src', 'sklogo.png');
    } else {
        image.setAttribute('src', '2.jpg');
    }
}
image.onclick = changeImage;
button.onclick = setName();

function countonpress () {
    button2.innerHTML = '';
        var i = button2.getAttribute('value');
        button2.setAttribute('value', i);
}
button2.onclick = countonpress;