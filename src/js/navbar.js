// Translated from JQuery by Google Gemini 1.0

document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const navMobileBars = document.querySelector("#nav-mobile-bars");
    const navMobileX = document.querySelector("#nav-mobile-x");
    const popout = document.querySelector("#popout");
    const mobileNavWrap = document.querySelector("#mobile-nav-wrap");

    // Open on #nav-mobile-bars click
    navMobileBars.addEventListener("click", function (event) {
        if (popout.classList.contains("hide")) {
            popout.classList.remove("hide");
            event.stopPropagation();
        }
    });

    // Close on #nav-mobile-x click
    navMobileX.addEventListener("click", function (event) {
        if (!popout.classList.contains("hide")) {
            popout.classList.add("hide");
            event.stopPropagation();
        }
    });

    // Close on external click
    document.addEventListener("click", function (event) {
        if (
            !event.target.closest("#popout") &&
            !popout.classList.contains("hide")
        ) {
            popout.classList.add("hide");
        }
    });

    // Hide or show mobile navbar on scroll (for viewports less than 576px)
    if (window.innerWidth < 576) {
        let oldScroll = window.pageYOffset;
        window.addEventListener("scroll", function () {
            const newScroll = window.pageYOffset;

            // Hide on scroll down
            if (
                newScroll > oldScroll &&
                !mobileNavWrap.classList.contains("hide")
            ) {
                mobileNavWrap.classList.add("hide");
            }

            // Show on scroll up
            else if (
                newScroll < oldScroll &&
                mobileNavWrap.classList.contains("hide")
            ) {
                mobileNavWrap.classList.remove("hide");
            }

            oldScroll = newScroll;
        });
    }
});
