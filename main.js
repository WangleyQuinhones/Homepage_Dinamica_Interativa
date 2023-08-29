// Menu Section
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});
//greeting Section

function celsiusTofahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

const greetingText = "Bom dia!";
const weatherCondiction = "Nublado";
const userLocal = "Campo Grande";
let temperature = 29.888;

let celsiusText = `O tempo está ${weatherCondiction} em ${userLocal} e faz ${temperature.toFixed(1)}°C lá fora.`;
let fahrText = `O tempo está ${weatherCondiction} em ${userLocal} e faz ${celsiusTofahr(temperature).toFixed(1)}°F lá fora.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document.querySelector(".weather-group").addEventListener("click", function(e){
    
    if(e.target.id == "celsius"){
        document.querySelector("p#weather").innerHTML = celsiusText;
    } else if(e.target.id == "fahr"){
        document.querySelector("p#weather").innerHTML = fahrText;
    }
});
//new date().getHours()
//new date().getMinutes()
//new date().getSeconds

let localTime = new Date();

