//Back to top button script

window.onscroll = function() {scrollFunction()};

document.getElementById("fixedbutton").style.display = "none";
document.getElementById("floatBar").style.display = "none";

function makeNavSticky() {
  var navbar = document.querySelector('.navbar');
  var bounds = navbar.getBoundingClientRect();
  if(bounds.top + bounds.height <= 0) {
//    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementById("fixedbutton").style.display = "block";
        document.getElementById("floatBar").style.display = "block";
    }

    else {
        document.getElementById("fixedbutton").style.display = "none";
        document.getElementById("floatBar").style.display = "none";
    }
    updateTimeout = null;
}

var updateTimeout = null;
function scrollFunction() {
  if(!updateTimeout) {
    window.setTimeout(makeNavSticky, 100);
  }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
