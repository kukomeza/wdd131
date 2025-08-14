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
const nav = document.querySelector('nav');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    nav.style.setProperty('grid-rows', '1/2');
    nav.style.setProperty('grid-column','1/4');
});

const visitsDisplay = document.querySelector(".main-container");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

let pVisits = document.createElement("p");
pVisits.setAttribute("class", "visits-p");
// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
    
    numVisits++;
    pVisits.textContent = `Request No.${numVisits}!`;
    visitsDisplay.appendChild(pVisits);
    
    
} else {
    pVisits.textContent = `This is your first Request!`;
    visitsDisplay.appendChild(pVisits);
    numVisits++;
}

// 4️⃣ increment the number of visits by one.


// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);