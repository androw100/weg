let Loading = document.querySelector(".loading");

let loading_func = function () {
    Loading.style.opacity = "0";
    document.body.style.overflow = "auto";
}
setTimeout(loading_func, 3500);
let d_none = function () {
    Loading.style.display = "none";
}
setTimeout(d_none, 2100);

AOS.init();



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "قراءه المزيد";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "عرض اقل";
        moreText.style.display = "inline";
    }
}