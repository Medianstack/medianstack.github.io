// menulink:hover

var menuLink1 = document.querySelector(".menulink1");

menuLink1.addEventListener("mouseenter", (evt) => {
  evt.target.style.color = "#ABBF0E";
  evt.target.style.transition = "0.5s";
});

menuLink1.addEventListener("mouseleave", (evt) => {
  evt.target.style.color = "#FFFFFF";
  evt.target.style.transition = "0.5s";
});



var menuLink2 = document.querySelector(".menulink2");

menuLink2.addEventListener("mouseenter", (evt) => {
  evt.target.style.color = "#ABBF0E";
  evt.target.style.transition = "0.5s";
});

menuLink2.addEventListener("mouseleave", (evt) => {
  evt.target.style.color = "#FFFFFF";
  evt.target.style.transition = "0.5s";
});






//===============




// Footer icons:hover

const footerIcon1 = document.querySelector(".footer-icon-1");

footerIcon1.addEventListener("mouseenter", (evt) => {
  evt.target.style.height = "70px";
  evt.target.style.transition = "0.5s";
});

footerIcon1.addEventListener("mouseleave", (evt) => {
  evt.target.style.height = "35px";
  evt.target.style.transition = "0.5s";
});



const footerIcon2 = document.querySelector(".footer-icon-2");

footerIcon2.addEventListener("mouseenter", (evt) => {
  evt.target.style.height = "70px";
  evt.target.style.transition = "0.5s";
});

footerIcon2.addEventListener("mouseleave", (evt) => {
  evt.target.style.height = "35px";
  evt.target.style.transition = "0.5s";
});



const footerIcon3 = document.querySelector(".footer-icon-3");

footerIcon3.addEventListener("mouseenter", (evt) => {
  evt.target.style.height = "70px";
  evt.target.style.transition = "0.5s";
});

footerIcon3.addEventListener("mouseleave", (evt) => {
  evt.target.style.height = "35px";
  evt.target.style.transition = "0.5s";
});



//===========================================

const footerlink1 = document.querySelector(".footerlink1");

footerlink1.addEventListener("mouseenter", (evt) => {
  evt.target.style.color = "#ABBF0E";
  evt.target.style.transition = "0.3s";
});

footerlink1.addEventListener("mouseleave", (evt) => {
  evt.target.style.color = "#FFFFFF";
  evt.target.style.transition = "0.3s";
});




const footerlink2 = document.querySelector(".footerlink2");

footerlink2.addEventListener("mouseenter", (evt) => {
  evt.target.style.color = "#ABBF0E";
  evt.target.style.transition = "0.3s";
});

footerlink2.addEventListener("mouseleave", (evt) => {
  evt.target.style.color = "#FFFFFF";
  evt.target.style.transition = "0.3s";
});










const submitInput = document.querySelector(".submitInput");

submitInput.addEventListener("mouseenter", (evt) => {
  evt.target.style.color = "#ABBF0E";
  evt.target.style.transition = "0.3s ease";
});

submitInput.addEventListener("mouseleave", (evt) => {
  evt.target.style.color = "#000000";
  evt.target.style.transition = "0.5s ease";
});


function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change-nav");
  document.getElementById("menu-bar").classList.toggle("change-menu-bar");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
