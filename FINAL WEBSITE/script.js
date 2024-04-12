document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#contactForm");
    form.addEventListener("submit", function(event) {
        // Form validation logic goes here
        event.preventDefault(); // Prevent form submission for demonstration
    });
});
// JavaScript for automatic image slider
let currentIndex = 0;
const images = ["presi.jpg", "image4.jpg", "image5.jpg", "image6.jpg"]; // Add more image URLs here
const sliderText = ["President", "Blood Donation Camp", "Team Leo" , "Leo Traning Camp 2080"]; // Corresponding image descriptions

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const sliderImage = document.querySelector(".image-slider-img");
    const sliderDescription = document.querySelector(".image-slider p");
    sliderImage.src = images[currentIndex];
    sliderDescription.textContent = sliderText[currentIndex];
}

// Change image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);
