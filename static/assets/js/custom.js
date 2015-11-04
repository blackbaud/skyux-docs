// Custom JavaScript for Sky Docs
new WOW().init();


//Custom Lightbox JS//
$(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(document).ready(function(){
  $('a[data-toggle="collapse"]').on('click', function(){
    var target = $(this).attr('href');
    if($('div.collapse').not(target).hasClass('in')){
      $('div.collapse').removeClass('in');
    };
  });
  
});