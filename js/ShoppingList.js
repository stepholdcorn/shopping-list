$(document).ready(function() {

  $(':header').addClass('headline');
  $('li:lt(3)').hide().fadeIn(1500);
  $('li').on('click', function() {
    $(this).remove();
  });

  $('li em').addClass('seasonal');
  $('li.hot').addClass('favorite');

  $(function() {
    $('li:contains("pine")').text('almonds');
    $('li.hot').html(function() {
      return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
  });

});

