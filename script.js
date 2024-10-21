 
 // Fetch the navbar content and insert it into the page
  document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            // Add logic to highlight the active link
            let currentPath = window.location.pathname.split("/").pop();
            let navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                }
            });
        });
});


  // Fetch the navbar content and insert it into the page
  document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

const text = "Big agency capabilities, Boutique agency Advantages.";
const heroHeading = document.querySelector(".hero-heading");

// Clear the heading and create individual span elements for each letter
heroHeading.innerHTML = "";

// Split the text into individual letters
[...text].forEach((letter, index) => {
  const span = document.createElement("span");
  span.classList.add("letter");

  // Assign animation delay based on index for staggering effect
  span.style.animationDelay = `${index * 0.1}s`;
  
  // Randomly assign a direction (left or right) for each letter
  span.style.transform = Math.random() > 0.5 ? "translateX(-50%)" : "translateX(50%)";

  // Set the letter content
  span.textContent = letter === " " ? "\u00A0" : letter; // Preserve spaces
  heroHeading.appendChild(span);
});

// JavaScript for Counter Animation
document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.projects-num .counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 200; // Adjust this value for faster or slower counting

    const updateCounter = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 30); // Adjust speed
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
});





// VERTICLE SLIDER
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("#v-pills-tab .nav-link");
  const contents = document.querySelectorAll(".tab-pane");
  const verticleTabs = document.querySelector(".verticle-tabs"); // Select the section with the background
  let currentIndex = 0;

  // Background images for each tab
  const backgroundImages = [
    "./assests/main-images/birlaa1bg.png", 
    "./assests/main-images/supremebg.png",  
    "./assests/main-images/corporateBranding.png", 
    "./assests/main-images/jitobg.png", 
    "./assests/main-images/corporate.png", 

  ];

  // Function to switch tabs and change background
  function switchTab(index) {
    // Remove active class from all tabs and contents
    tabs.forEach((tab, idx) => {
      tab.classList.remove("active");
      contents[idx].classList.remove("show", "active");
    });

    // Activate the current tab and content
    tabs[index].classList.add("active");
    contents[index].classList.add("show", "active");

    // Change the background image
    verticleTabs.style.backgroundImage = `url(${backgroundImages[index]})`;
  }

  // Handle tab hover (mouseenter)
  tabs.forEach((tab, index) => {
    tab.addEventListener("mouseenter", () => {
      currentIndex = index;  // Update the current index when a tab is hovered
      switchTab(currentIndex);
    });
  });

  // Initialize by showing the first tab and background image on page load
  switchTab(currentIndex);
});


  
  $(document).ready(function () {
    $(".logo-slider").slick({
      infinite: true, // Enable infinite loop
      slidesToShow: 5, // Number of logos to show at once
      slidesToScroll: 1, // Scroll one logo at a time
      autoplay: true, // Enable auto-play
      autoplaySpeed: 0, // Continuous scrolling
      speed: 4500, // Speed of sliding
      cssEase: "linear", // Smooth animation
      variableWidth: true, // Adjusts width of items
      arrows: false, // Hide navigation arrows
      pauseOnHover: false, // Do not pause on hover
      swipe: false, // Disable swipe to ensure continuous effect
      rows: 1, // Single row of slides
    });
  });

  $(document).ready(function () {
    $(".testimonial-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: true,
      fade: true,
      cssEase: "linear",
    });
  });


