// window.onscroll = function() {scrollFunction()};
//
// document.querySelector(".cust-navbar").style.padding = "3rem 0.6rem";
//
// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.querySelector(".cust-navbar").style.padding = "0.6rem 0.3rem";
//     document.querySelector(".cust-logo").style.width = "2.2rem";
//   } else {
//     document.querySelector(".cust-navbar").style.padding = "3rem 0.65rem";
//     document.querySelector(".cust-logo").style.width = "2.2rem";
//   }
// }


function toggleMobileMenu(menu) {
   menu.classList.toggle("open");
}

// var body = document.getElementById('body-content');
// body.style.display = 'none';

// setTimeout(() => {
//   body.style.display = 'block';
// }, 3500);


$(document).ready(function() {
    $(".navbar-toggler").dropdown();
});
