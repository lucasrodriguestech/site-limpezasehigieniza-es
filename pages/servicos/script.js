const imgs = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".botao i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
let currentIndex = 0;
let time = 14000; //Tempo padrão para apresentação de slides automática
const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};
defClass(1, 0);
leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});
rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});
const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};
startAutoSlide(); //Inicia o slideshow

document.addEventListener('DOMContentLoaded', function() {
  const iconDropdown = document.querySelector('.icon-dropdown');

  // Adiciona o event listener apenas quando o ícone é clicado
  iconDropdown.addEventListener('click', function dropdownClickHandler() {
     dropdownToggle();

  });
});

function dropdownToggle() {
 const dropdown = document.querySelector('.dropdown');

 if (dropdown.style.display === 'none' || dropdown.style.display === '') {
     dropdown.style.display = 'flex';
 } else {
     dropdown.style.display = 'none';
 }
}
