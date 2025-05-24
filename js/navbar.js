$(document).ready(function () {
    const $hamburger = $('#nav-toggle');
    const $desktopNav = $('.custom-navbar .nav');
    const $mobileMenu = $('#mobile-menu');
    const $navbar = $('.custom-navbar');

    $hamburger.on('click', function () {
        if (window.innerWidth <= 991.98) {
            // MOBILE: toggle mobile sidebar
            $(this).toggleClass('active');
            $mobileMenu.toggleClass('show');
            $mobileMenu.attr('aria-hidden', !$mobileMenu.hasClass('show'));
        } else {
            // DESKTOP: toggle desktop nav as before (fade in/out)
            $(this).toggleClass('active');
            if ($desktopNav.hasClass('show')) {
                $desktopNav.fadeOut(300).removeClass('show');
            } else {
                $desktopNav.fadeIn(300).addClass('show');
            }
        }
    });

    // Close mobile menu on link click
    $mobileMenu.find('.link').on('click', function () {
        $hamburger.removeClass('active');
        $mobileMenu.removeClass('show').attr('aria-hidden', true);
    });

    // Optional: Close desktop nav on link click (if you want)
    /*
    $desktopNav.find('.link').on('click', function () {
        $hamburger.removeClass('active');
        $desktopNav.fadeOut(300).removeClass('show');
    });
    */

    // Navbar background toggle on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            $navbar.addClass('scrolled');
        } else {
            $navbar.removeClass('scrolled');
        }
    });

    // Close menus on window resize if necessary
    $(window).on('resize', function () {
        if (window.innerWidth > 991.98) {
            // Desktop: close mobile menu
            $mobileMenu.removeClass('show').attr('aria-hidden', true);
            $hamburger.removeClass('active');
            // Desktop nav remains untouched
        } else {
            // Mobile: close desktop nav
            $desktopNav.fadeOut(300).removeClass('show');
            $hamburger.removeClass('active');
        }
    });

    // Close mobile sidebar when clicking outside it
    $(document).on('click', function(event) {
        const $mobileMenu = $('#mobile-menu');
        const $hamburger = $('#nav-toggle');
        if ($mobileMenu.hasClass('show')) {
            // If click is outside mobileMenu and hamburger
            if (!$(event.target).closest('#mobile-menu, #nav-toggle').length) {
                $mobileMenu.removeClass('show').attr('aria-hidden', true);
                $hamburger.removeClass('active');
            }
        }
    });
});
