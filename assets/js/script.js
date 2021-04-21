/* CREDIT from w3school.com and customised for slide down a footer on scroll*/
// Footer
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos) {
        this.document.getElementById("footer").style.bottom = "0";

    } else {
        this.document.getElementById("footer").style.bottom = "-100px";
    }

    this.prevScrollpos = currentScrollpos;
}
