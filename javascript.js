ScrollReveal().reveal(".d-4");
ScrollReveal().reveal(".my-4");
ScrollReveal().reveal(".section-intro");
ScrollReveal().reveal(".row");
ScrollReveal().reveal(".text-center");



$(document).ready(function(){
  
  $('#cardSlider').carousel({
    interval: 1500,
  });
});




$(document).ready(function () {
 
  $('.navbar-nav a, .navbar-nav .dropdown-item').on('click', function (event) {
    
    if ($(this).hasClass('dropdown-item')) {
    
      $(this).closest('.dropdown').addClass('show');
    } else {
     
      $('#offcanvasNavbar').removeClass('show');
      $('body').removeClass('offcanvas-open');
      $('.offcanvas-backdrop').remove();
    }
  });
});

