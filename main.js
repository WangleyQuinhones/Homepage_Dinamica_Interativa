const galleryImages = [
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    },
    {
        src: "./assets/gallery/img1.png",
        alt: "Thumbnail Image 3"
    }
];
// Menu Section
function menuHandler(){
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});
document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});
}
function celsiusTofahr(temperature){
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}
//greeting Section
function greetingHandler(){
let currentHour = new Date().getHours();
let greetingText;  

if (currentHour < 12){
    greetingText = "Bom dia!";
} else if(currentHour < 19){
    greetingText ="Boa tarde!" ;
} else if(currentHour < 24){
    greetingText="Boa noite";
} else{
    greetingText="Bem vindo!";
}


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
}
function clockHandler(){
setInterval(function(){    
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
},1000);
}
//Galerry Section
function galleryHandler(){
for (let i in galleryImages){
    console.log(galleryImages[i]);
}

let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");


mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

//<img src="./assets/gallery/image1.jpg" 
//alt="Thumbnail Image 1"
//data-array-index="0" data-selected="true">

galleryImages.forEach(function(image, index){
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true :  false;

    thumb.addEventListener("click", function(e){
        let selectedIndex = e.target.dataset.arrayIndex;
        let selectedImage = galleryImages[selectedIndex];
        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;

        thumbnails.querySelectorAll("img").forEach(function(img){
            img.dataset.selected = false;
        });

        e.target.dataset.selected = true;
    });

    thumbnails.appendChild(thumb);
    
});
}
// Page Load
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
