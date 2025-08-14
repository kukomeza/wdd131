const today = new Date();

const currentYear = document.querySelector("#currentYear")
const lastModified = document.querySelector("#lastModified")
const currentPage = document.querySelector("#h2-title")

const msg = document.getElementById

const fullYear = today.getFullYear()

const lastModification = document.lastModified

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const nav = document.querySelector('nav');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    nav.style.setProperty('grid-rows', '1/2');
    nav.style.setProperty('grid-column','1/4');
});

currentYear.textContent = fullYear
lastModified.textContent = `Last Modification: ${lastModification}`
