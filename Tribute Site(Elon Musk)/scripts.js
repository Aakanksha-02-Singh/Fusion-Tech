document.addEventListener("DOMContentLoaded", function() {
    // Navigation menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('hidden');
    });

    // Carousel functionality
    const images = [
        './images/spacex.jpg',
        './images/tesla.jpg',
        './images/neuraLink.jpg',
        './images/180517-boring.jpg'
    ];
    let currentIndex = 0;

    const carouselImg = document.querySelector('.carousel img');
    const prevButton = document.querySelector('.carousel .prev');
    const nextButton = document.querySelector('.carousel .next');

    function showImage(index) {
        carouselImg.src = images[index];
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    // Initial image display
    showImage(currentIndex);

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.innerText = isDarkMode ? 'Light Mode' : 'Dark Mode';
    });

    // Form validation
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message!');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
