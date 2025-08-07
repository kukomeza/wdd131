const today = new Date();

const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");
const currentPage = document.querySelector("#h2-title");

const msg = document.getElementById;

const fullYear = today.getFullYear();

const lastModification = document.lastModified;

currentYear.textContent = fullYear;
lastModified.textContent = `Last Modification: ${lastModification}`;



const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const selectProducts = document.querySelector("#product");
createSelectProducts();

function createSelectProducts() {
    products.forEach(product => {
        let productOption = document.createElement("option");
        productOption.setAttribute("value", product.id);
        productOption.textContent = `${product.name}`;
        selectProducts.appendChild(productOption);
    });
}

