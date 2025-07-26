const today = new Date();

const currentYear = document.querySelector("#currentYear")
const lastModified = document.querySelector("#lastModified")
const currentPage = document.querySelector("#h2-title")

const msg = document.getElementById

const fullYear = today.getFullYear()

const lastModification = document.lastModified

currentYear.textContent = fullYear
lastModified.textContent = `Last Modification: ${lastModification}`

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');



// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
	year: 2005
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
	year: 1888
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
	year: 2015
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
	year: 2020
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
	year: 1974
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
	year: 1986
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
	year: 1983
	},
	{
    templeName: "Veracruz Mexico",
    location: "Veracruz, Mexico",
    dedicated: "1999, May, 29",
    area: 10700,
    imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/veracruz-mexico/400x250/veracruz-mexico-temple-lds-83516-wallpaper.jpg",
	year: 1999
	},
	{
    templeName: "Trujillo Peru",
    location: "Trujillo, Peru",
    dedicated: "2015, June, 21",
    area: 28200,
    imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/trujillo-peru/400x250/trujillo-peru-temple-exterior-1449769-wallpaper.jpg",
	year: 2015
	},
	{
    templeName: "Monterrey Mexico",
    location: "Monterrey, Mexico",
    dedicated: "2002, Abril, 28",
    area: 16498,
    imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monterrey-mexico/400x250/monterrey-mexico-temple-lds-645907-wallpaper.jpg",
	year: 2002
  },
  // Add more temple objects here...
];

createTempleCard(temples);

const home = document.querySelector("#home")
const byOld = document.querySelector("#old");
const byNew = document.querySelector("#new");
const byLarge = document.querySelector("#large");
const bySmall = document.querySelector("#small");

home.addEventListener("click", () => {
	createTempleCard(temples)
	currentPage.textContent="Home"
})

byOld.addEventListener("click", () => {
	
	createTempleCard(temples.filter(temple => temple.year < 1900));
	currentPage.textContent="Old Temples"
})

byNew.addEventListener("click", () => {
	
	createTempleCard(temples.filter(temple => temple.year > 2000));
	currentPage.textContent="New Temples"
})

byLarge.addEventListener("click", () => {
	
	createTempleCard(temples.filter(temple => temple.area > 90000));
	currentPage.textContent="Large Temples"
})

bySmall.addEventListener("click", () => {
	
	createTempleCard(temples.filter(temple => temple.area < 10000));
	currentPage.textContent="Small Temples"
})

function createTempleCard(filteredTemples) {
	document.querySelector(".card").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class ="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class=label>Size:</span> ${temple.area}`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`)
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".card").appendChild(card);

	})

}