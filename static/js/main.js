let nav = document.querySelectorAll('nav > a')

if (document.location.pathname.split("/")[1] == ""){
    el = document.getElementById('main');
    if (!el.classList.contains("active")){
        for (var i = 0; i < nav.length; ++i) {
            nav[i].classList.remove("active");
        } 
        el.classList.add("active");
    }
} else {
    el = document.getElementById(document.location.pathname.split("/")[1]);
    if (!el.classList.contains("active")){
        for (var i = 0; i < nav.length; ++i) {
            nav[i].classList.remove("active");
        } 
        el.classList.add("active"); 
    }
}