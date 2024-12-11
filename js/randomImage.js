const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["images/pic1.jpeg", "images/pic2.jpeg", "images/pic3.webp", "images/pic4.jpeg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex]; 
    
}