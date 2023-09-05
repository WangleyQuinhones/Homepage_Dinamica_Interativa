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

setInterval(function(){    
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
},1000);

//Galerry Section

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
];

for (let i in galleryImages){
    console.log(galleryImages[i]);
}

