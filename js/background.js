const images = [
    "0.jfif",
    "1.jfif",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

//javascript에서 만들고 html에 넣기

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);