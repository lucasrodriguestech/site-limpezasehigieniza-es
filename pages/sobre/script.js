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
