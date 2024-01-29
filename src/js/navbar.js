$(document).ready(function () {
    // Open on #hamburger-bars click
    $("#nav-mobile-bars").click(function (event) {
        if ($("#popout").hasClass("hide")) {
            $("#popout").removeClass("hide");
            event.stopPropagation();
        }
    });

    // Close on #hamburger-x click
    $("#nav-mobile-x").click(function (event) {
        if (!$("#popout").hasClass("hide")) {
            $("#popout").addClass("hide");
            event.stopPropagation();
        }
    });

    // Close on external click
    $(document).click(function (event) {
        // .closest function returns array with jQuery object of closest #popout
        if (
            !$(event.target).closest("#popout").length &&
            !$("#popout").hasClass("hide")
        ) {
            $("#popout").addClass("hide");
        }
    });

    // Hide or show mobile navbar on scroll
    if ($(window).width() < 576) {
        var oldScroll = $(window).scrollTop();
        $(window).on("scroll", function () {
            var newScroll = $(window).scrollTop();
            // Hide on scroll down
            if (
                newScroll > oldScroll &&
                !$("#mobile-nav-wrap").hasClass("hide")
            ) {
                $("#mobile-nav-wrap").addClass("hide");
            }
            // Show on scroll up
            else if (
                newScroll < oldScroll &&
                $("#mobile-nav-wrap").hasClass("hide")
            ) {
                $("#mobile-nav-wrap").removeClass("hide");
            }
            oldScroll = newScroll;
        });
    }
});
