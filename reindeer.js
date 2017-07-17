

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var loopCounter;

var hohohoElement = document.getElementById("reindeer");

if (colors.length < reindeer.length) {
	loopCounter = colors.length;
} else if (reindeer.length < colors.length) {
	loopCounter = reindeer.length;
} else {
	loopCounter = colors.length;
}

// console.log("Colors Length:", colors.length);
// console.log("Reindeer Length:", reindeer.length);
// console.log(loopCounter);


for (var i = 0; i < loopCounter; i++) {

	hohohoElement.innerHTML += `<p>${colors[i]} ${reindeer[i]}</p>`

	console.log(colors[i]);
	console.log(reindeer[i]);
}

// Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

// Example output:

// Blue Dasher

// Red Dancer

