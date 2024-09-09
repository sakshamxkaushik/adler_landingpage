// Initialize Locomotive Scroll for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Function to handle animations on page 4
function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    
    // Show fixed image when mouse enters the element container
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    
    // Hide fixed image when mouse leaves the element container
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    // Change background image of fixed element based on hovered element
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

// Function to initialize Swiper for slide animations
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

// Function to handle menu animations
function menuAnimation() {
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    
    menu.addEventListener("click", function () {
        if (flag == 0) {
            // Open menu
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            // Close menu
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

// Function to handle loader animation
function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

// Call the animation functions
swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()