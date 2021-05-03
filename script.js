function resizeProfile() {
    var view_height = window.innerHeight;
    var header_height = document.getElementById("headerformatting").clientHeight;
    document.getElementById("about").style.height = view_height - header_height + 'px';
}

// causes too many spacing issues 
 
// document.addEventListener("DOMContentLoaded", resizeProfile);
// window.addEventListener("resize", resizeProfile)
