const today = new Date();

const currentYear = document.querySelector("#currentYear")
const lastModified = document.querySelector("#lastModified")



const fullYear = today.getFullYear()

const lastModification = document.lastModified

currentYear.textContent = fullYear
lastModified.textContent = `Last Modification: ${lastModification}`

function calculateWindChill (temperature, windSpeed){
    let result;
    if (temperature <= 50 && windSpeed > 3 ){
                
        
        result = Math.round(35.74 + 0.6215 * temperature - 35.75 * (windSpeed**0.16) + 0.4275 * temperature * (windSpeed**0.16)) + '°F';
    }else{
       result = 'N/A';
    }
    
    return result;
}

const windChillFactor = document.querySelector("#windChill")
const placeTemperature = document.querySelector("#placeTemperature")
const placeWindSpeed = document.querySelector("#placeWindSpeed")
const placeConditions = document.querySelector("#placeConditions")

let temperature = 32;
let windSpeed = 30;
let conditions = 0;

windChillFactor.innerHTML = calculateWindChill(temperature, windSpeed);
placeTemperature.innerHTML = temperature + "°F";
placeWindSpeed.innerHTML = windSpeed + "mph";
placeConditions.innerHTML = conditions;