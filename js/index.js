// sticky top
$(function () {

    window.onscroll = function () {
        myFunction()
    };

    var navbar = document.getElementById("main_menus");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {

            navbar.classList.add("sticky")
        } else {

            navbar.classList.remove("sticky");
        }
    }


});
//  end sticky top

$('.navbar-toggler-icon').on('click', function () {
    $('.navbar-collapse').css('background', '#222f33');
    $('.navbar-collapse').css('padding','20px')
});