$(document).ready(function() {
    $( "#continue" ).click(function() {
         $('#container').addClass('loaded');
      // Once the container has finished, the scroll appears
      if ($('#container').hasClass('loaded')) {
        // It is so that once the container is gone, the entire preloader section is deleted
        $('#preloader').delay(2000).queue(function() {
          $(this).remove();
        });}
      });
});
  
const donerTriangle = document.querySelector(".doner-triangle");
const dropDownDiv = document.querySelector(".dropdown");

donerTriangle.addEventListener("click", ()=>{
    dropDownDiv.classList.toggle("opened");
})


$(function() {
    let list = $('.spirit-type .js-dropdown-list');
    let link = $('.spirit-type .js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      let text = $(this).html();
      let icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
    
    });
  });

$(function() {
    let list = $('.type-of-spirit .js-dropdown-list');
    let link = $('.type-of-spirit .js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      let text = $(this).html();
      let icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
    
    });
  });

$(function() {
    let list = $('.origin-country .js-dropdown-list');
    let link = $('.origin-country .js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      let text = $(this).html();
      let icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
    
    });
  });

$(function() {
    let list = $('.country-division .js-dropdown-list');
    let link = $('.country-division .js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      let text = $(this).html();
      let icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
    
    });
  });
$(function() {
    let list = $('.basic-taste .js-dropdown-list');
    let link = $('.basic-taste .js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      let text = $(this).html();
      let icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
    
    });
  });

$(function() {
    let list = $('.spirit-taste .js-dropdown-list');
    let link = $('.spirit-taste .js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      let text = $(this).html();
      let icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
    
    });
  });
$(function() {
    let list = $('.basic-smell .js-dropdown-list');
    let link = $('.basic-smell .js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      let text = $(this).html();
      let icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
    
    });
  });
$(function() {
    let list = $('.special-attributes .js-dropdown-list');
    let link = $('.special-attributes .js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      let text = $(this).html();
      let icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
    
    });
  });
$(function() {
    let list = $('.search-in-eu .js-dropdown-list');
    let link = $('.search-in-eu .js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      let text = $(this).html();
      let icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
    
    });
  });
$(function() {
    let list = $('.select-price-range .js-dropdown-list');
    let link = $('.select-price-range .js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      let text = $(this).html();
      let icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
    
    });
  });




