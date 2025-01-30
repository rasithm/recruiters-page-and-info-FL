let showMenuBar = document.getElementById('c-3-show');
let showMenuBar1 = document.getElementById('c-3-show-1');
let showMenuBar2 = document.getElementById('c-3-show-2');

showMenuBar.addEventListener('click', function() {
    let c3Post = document.getElementById('c-3-post');
    let c3Vacancy = document.getElementById('c-3-vacancy');
    // Check if display is 'none' or not set
    if (c3Post.style.display === "none" || c3Post.style.display === "") {
        c3Post.style.display = "flex";
        c3Vacancy.style.display = "flex";
    } else {
        c3Post.style.display = "none";
        c3Vacancy.style.display = "none";
    }
});

showMenuBar1.addEventListener('click', function() {
    let c3Post1 = document.getElementById('c-3-post-1');
    let c3Vacancy1 = document.getElementById('c-3-vacancy-1');
    // Check if display is 'none' or not set
    if (c3Post1.style.display === "none" || c3Post1.style.display === "") {
        c3Post1.style.display = "flex";
        c3Vacancy1.style.display = "flex";
    } else {
        c3Post1.style.display = "none";
        c3Vacancy1.style.display = "none";
    }
});

showMenuBar2.addEventListener('click', function() {
    let c3Post2 = document.getElementById('c-3-post-2');
    let c3Vacancy2 = document.getElementById('c-3-vacancy-2');
    // Check if display is 'none' or not set
    if (c3Post2.style.display === "none" || c3Post2.style.display === "") {
        c3Post2.style.display = "flex";
        c3Vacancy2.style.display = "flex";
    } else {
        c3Post2.style.display = "none";
        c3Vacancy2.style.display = "none";
    }
});
