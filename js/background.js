const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
 
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImg");

document.body.appendChild(bgImage);
