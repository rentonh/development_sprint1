//Back to top button script
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    document.getElementById("fixedbutton").style.display = "none";

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("fixedbutton").style.display = "block";
    }

    else {
        document.getElementById("fixedbutton").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
