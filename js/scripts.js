console.log("hi");
var images = ['https://img.pokemondb.net/sprites/ruby-sapphire/normal/spheal.png','https://img.pokemondb.net/sprites/ruby-sapphire/shiny/spheal.png'];
var images1 = ['https://img.pokemondb.net/sprites/ruby-sapphire/normal/sealeo.png','https://img.pokemondb.net/sprites/ruby-sapphire/shiny/sealeo.png'];
var images2 = ['https://img.pokemondb.net/sprites/ruby-sapphire/normal/walrein.png','https://img.pokemondb.net/sprites/ruby-sapphire/shiny/walrein.png'];
	

var images3 = ['https://img.pokemondb.net/sprites/diamond-pearl/normal/spheal.png','https://img.pokemondb.net/sprites/diamond-pearl/shiny/spheal.png'];

function getRandomImage() {
	var num = Math.floor(Math.random()*81);
	var idx = (num == 9) ? 1 : 0;
	console.log(idx);
	console.log(num);
	return idx;
}
 
window.onload = function displayRandomImage() {
	
	var htmlImage = document.getElementById("mon");
	var shiny = getRandomImage();
	htmlImage.src = images[shiny];

	
	document.getElementById("mon").addEventListener("click", evolve);
}


var count = 0;
console.log("bye");

function evolve() {
	count = count + 1;
	
	var htmlImage = document.getElementById("mon");
	
	if (count == 3) {
		htmlImage.src = (htmlImage.src.includes("shiny")) ? images1[1] : images1[0];
	}
	if (count == 9) {	
		htmlImage.src = (htmlImage.src.includes("shiny")) ? images2[1] : images2[0];
	}

	console.log("evolving");
	console.log(count);

}

