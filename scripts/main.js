let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc == 'images/negotiation.jpg') {
		myImage.setAttribute('src', 'images/scales.jpeg');
	}
	else {
		myImage.setAttribute('src', 'images/negotiation.jpg');
	}

}

function setUserName() {
	let myName = prompt("please enter your name");
	localStorage.setItem('name', myName);
	myHeading.textContent = 'New ' + storedName;
}

if (!localStorage.getItem('name')) {
	setUserName();
}
else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Old ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}