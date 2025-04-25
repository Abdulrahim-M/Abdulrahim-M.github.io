$(document).ready(function () {
    const $hamburger = $('#nav-toggle');
    const $nav = $('.custom-navbar .nav');
    const $navbar = $('.custom-navbar'); // The navbar container
    let lastScrollTop = 0; // Variable to track scroll position
  
    // Toggle the nav visibility with a fade effect when the hamburger is clicked
    $hamburger.on('click', function () {
        $(this).toggleClass('active'); // Toggle hamburger animation
        
        if ($nav.hasClass('show')) {
            // If the nav is visible, fade it out
            $nav.fadeOut(300).removeClass('show'); // Fade out and remove the show class
        } else {
            // If the nav is hidden, fade it in
            $nav.fadeIn(300).addClass('show'); // Fade in and add the show class
        }
    });
  
    // Close nav when a link is clicked
    // $('.custom-navbar .link').on('click', function () {
    //     $hamburger.removeClass('active'); // Reset hamburger icon
    //    $nav.fadeOut(300).removeClass('show'); // Fade out and hide nav when a link is clicked
    // });
  
    // Scroll functionality to reveal navbar background
   window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
});
