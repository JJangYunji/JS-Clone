const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bdImage = document.createElement("img");
bdImage.src = `img/${chosenImage}`;

document.body.appendChild(bdImage);