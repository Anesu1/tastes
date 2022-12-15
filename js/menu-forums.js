const forumDropdown = document.querySelector("#forum-dropdown");
const forumMenu = document.querySelector("#forum-menu");
const forumMenuClose = document.querySelector("#forum-menu-close");
forumDropdown.addEventListener('click', ()=>{
    forumDropdown.classList.add("opened");
    forumMenu.classList.add("menu-button-clicked");
})
forumMenuClose.addEventListener('click', ()=>{
    forumDropdown.classList.remove("opened");
    forumMenu.classList.remove("menu-button-clicked");
})
