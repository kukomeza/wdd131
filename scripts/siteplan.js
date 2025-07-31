const today = new Date();

const currentYear = document.querySelector("#currentYear")
const lastModified = document.querySelector("#lastModified")
const currentPage = document.querySelector("#h2-title")

const msg = document.getElementById

const fullYear = today.getFullYear()

const lastModification = document.lastModified

currentYear.textContent = fullYear
lastModified.textContent = `Last Modification: ${lastModification}`