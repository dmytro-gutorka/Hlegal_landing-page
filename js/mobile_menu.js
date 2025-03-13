fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        if (hamburger && navMenu) {
            hamburger.addEventListener("click", () => {
                hamburger.classList.toggle("active");
                navMenu.classList.toggle("active");
            });

            document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }));
        } else {
            console.error("Elements .hamburger or .nav-menu not found!");
        }
    })
    .catch(error => console.error("Error loading header:", error));

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));

$(document).ready(function () {
    $('.pseudo-button').click(function () {
        if (window.innerWidth <= 600) {
            $('.costistent ul li').slideDown(500, function () {
                $('html, body').animate({
                    scrollTop: $('.costistent ul').offset().top - 60 
                }, 400);
            });
        }
    });
});


