// document.addEventListener('DOMContentLoaded', function () {
//     const navLinks = document.querySelectorAll('.nav-link');
//     const navbarCollapse = document.querySelector('.navbar-collapse');

//     navLinks.forEach(link => {
//       link.addEventListener('click', () => {
//         const bsCollapse = new bootstrap.Collapse(navbarCollapse);
//         bsCollapse.hide();
//       });
//     });
//   });


//   document.addEventListener('DOMContentLoaded', function () {
//     const navLinks = document.querySelectorAll('.nav-link');

//     navLinks.forEach(link => {
//       link.addEventListener('click', function (event) {
//         // Previene el comportamiento por defecto del link
//         event.preventDefault();

//         // Obtiene el destino al que apunta el link
//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);

//         // Calcula la posición ajustada
//         const offsetPosition = targetElement.offsetTop - document.querySelector('.navbar').offsetHeight;

//         // Realiza un scroll suave al destino ajustado
//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       });
//     });
//   });


  
