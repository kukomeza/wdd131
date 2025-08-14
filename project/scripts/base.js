

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
const homePage = document.querySelector(".card");



const homeCards = [
    {
        imgSrc: "images/card-img1.webp",
        title: "Improve Skills",
        content: "In our team the goal is you, join us to achieve your own goals."
    },
    {
        imgSrc: "images/card-img2.webp",
        title: "Early Start",
        content: "Desire to growth as soccer player is only required."
    },
    {
        imgSrc: "images/card-img3.webp",
        title: "No mather the gender",
        content: "Our league allows mixed gender teams and our team as well."
    },
    {
        imgSrc: "images/card-img4.webp",
        title: "Growth as a team",
        content: "Learn how to achieve your goals playing and training as a team."
    }
];

function fillCards(cards, page) {
    cards.forEach(card => {
        let article = document.createElement("section");
        let image = document.createElement("img");
        let title = document.createElement("h2");
        let content = document.createElement("p");

        article.setAttribute("class", "article");
        image.setAttribute("src", card.imgSrc);
        image.setAttribute("width", "300");
        image.setAttribute("height", "300")
        title.textContent = card.title;
        content.textContent = card.content;

        
        article.appendChild(image);
        article.appendChild(title);
        article.appendChild(content);

        page.appendChild(article);
        
    });

    
}

homePage.addEventListener('onload', fillCards(homeCards, homePage));


