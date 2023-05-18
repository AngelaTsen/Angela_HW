$(document).ready(function(){
  $('.slider1').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    onInitialized: function() {
    },
    onRefresh: function() {
    }
  });
  


  $('.slider2').owlCarousel({
    items: 3,
    margin: 30,
    nav: true,
    dots: true,
    
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
      items: 3
      }
    }
  });


  $('.slider__nav__arrov').click(function(e) {
    $('html, body').animate({
      scrollTop: $(".block").offset().top
    }, 500);
  });


  // Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
$('.gallery__imgs img').click(function(e) {
    modal.style.display = "block";
  $('.modal-content img').attr('src', $(this).attr('src'));
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


});

function initMap() {
  var mapOptions = {
    center: {lat: 40.7128, lng: -74.0060}, // Координати місцезнаходження (наприклад, Нью-Йорк)
    zoom: 12 // Збільшення карти
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: {lat: 40.730610, lng: -73.935242}, // Координати адреси
    map: map,
    title: "91 Nolan Extensions Suite 670" // Назва маркера
  });
}