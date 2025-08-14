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

const aboutCards = [
    {
        imgSrc: "images/card-img7.webp",
        title: "The first Team",
        content: ""
    },
    {
        imgSrc: "images/card-img8.webp",
        title: "Champions 1978",
        content: ""
    },
    {
        imgSrc: "images/card-img12.webp",
        title: "Champions 2024",
        content: ""
    },
    {
        imgSrc: "images/card-img10.webp",
        title: "Our team today",
        content: ""
    }
];

const aboutPage = document.querySelector(".card");


function fillCards(cards, page) {
    cards.forEach(card => {
        let article = document.createElement("section");
        let image = document.createElement("img");
        let title = document.createElement("h2");
        let content = document.createElement("p");

        article.setAttribute("class", "article");
        image.setAttribute("src", card.imgSrc);
        image.setAttribute("width", "300");
        image.setAttribute("loading", "lazy");
        title.textContent = card.title;
        content.textContent = card.content;

        article.appendChild(image);
        article.appendChild(title);
        article.appendChild(content);

        page.appendChild(article);
        
    });

    
}

aboutPage.addEventListener('onload', fillCards(aboutCards, aboutPage));