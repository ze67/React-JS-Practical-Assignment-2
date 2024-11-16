$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;
  
    function showSlide(index) {
      const offset = -index * 100;
      $('.slides').css('transform', `translateX(${offset}%)`);
    }
  
    $('#next').click(function() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    });
  
    $('#prev').click(function() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    });
  });
  