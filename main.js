$('.hide').hide();
$('.mobile-menu-item').hide();



$('.show').click(function(){
  $('.show').hide();
  $('.hide').show();
  $('.mobile-menu-item').show();
  $('.mobile-menu-item').toggleClass('toggle-class');
});


$('.hide').click(function(){
  $('.hide').hide();
  $('.show').show();

  $('.mobile-menu-item').toggleClass('toggle-class');
});
