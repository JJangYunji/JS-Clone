const images = [
  "image1.png",
  "image2.jpg",
  "image3.png",
  "image4.jpg",
  "image5.jpeg",
  "image6.jpg",
  "image7.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bdImage = document.createElement("img");
bdImage.src = `img/${chosenImage}`;

document.body.appendChild(bdImage);
