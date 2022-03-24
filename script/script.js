const navigation_menu = document.getElementById("navigation_menu");

document.
getElementById("burger")
    .addEventListener('click', function() {
        navigation_menu.classList.add('show')
    })

document.
getElementById("cancel_icon")
    .addEventListener('click', function() {
        navigation_menu.classList.remove('show')
    })


// \\\\
// \\\\
// \\\\ 
navigation_text = document.getElementById("navigation_text_bg");
navigation_links = document.getElementsByClassName("navigation_link");

for (let nav_link of navigation_links) {
    nav_link.addEventListener("mouseover", function() {
        navigation_text.innerHTML = nav_link.innerText
    })
}

for (let nav_link of navigation_links) {
    nav_link.addEventListener("mouseout", function() {
        navigation_text.innerHTML = ""
    })
}