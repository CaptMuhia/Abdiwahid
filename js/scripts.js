// Smooth scrolling for internal links
document.querySelectorAll('a.nav-link, a.navbar-brand').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize Google Map
function initMap() {
    var location = { lat: 37.7749, lng: -122.4194 }; // Replace with your actual address coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Typing animation for hero description
    const text = "Discover a dedicated team of legal experts committed to delivering innovative and effective solutions tailored to your unique needs. We are your partners in achieving your goals. Let's build a strong legal foundation together.";
    const descriptionElement = document.querySelector(".hero-description");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            descriptionElement.textContent += text[index];
            index++;
            setTimeout(typeText, 50); // Adjust typing speed here
        } else {
            descriptionElement.style.visibility = 'visible'; // Make the text visible after typing
        }
    }

    typeText();

    // Scroll animation for elements with .scroll-animation class
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(el => {
        observer.observe(el);
    });
});

//why choose us//
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.choose-box');
    elements.forEach(el => {
        observer.observe(el);
    });

    elements.forEach(box => {
        box.addEventListener('click', function() {
            // Collapse other boxes
            elements.forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.classList.remove('active');
                }
            });

            // Toggle active class for clicked box
            box.classList.toggle('active');
        });
    });

    // Close description on click outside the boxes
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.choose-box')) {
            elements.forEach(box => {
                box.classList.remove('active');
            });
        }
    });
});

//practice areas
document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalItems;
        items[currentIndex].classList.add('active');
    }

    function startCarousel() {
        setInterval(showNextItem, 3000); // Change slide every 3 seconds
    }

    startCarousel();
});

//who we are
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(el => {
        observer.observe(el);
    });
});