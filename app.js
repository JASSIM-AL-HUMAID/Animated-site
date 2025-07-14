const vid1 = document.getElementById("project-vid1");
const vid2 = document.getElementById("project-vid2");
const vid3 = document.getElementById("project-vid3");
const hover_sign = document.querySelector(".project-vid .hover-sign");
const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");
const closeSideBar = document.querySelector(".close-icon");

const vids = [vid1, vid2, vid3];

vids.forEach((vid) => {
    vid.addEventListener("mouseenter", () => {
        vid.play();
        hover_sign.classList.add("active");
    });
    vid.addEventListener("mouseleave", () => {
        vid.pause();
        hover_sign.classList.remove("active");
    });
});
menuIcon.addEventListener("click", () => {
    sideBar.classList.remove('close-sidebar')
    sideBar.classList.add("open-sidebar");
});
closeSideBar.addEventListener("click", () => {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});
