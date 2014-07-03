/*
 * Peke's Project
 */

$('#reposDetail').live('pageshow', function(event) {
    $('a.media').media({width:360, height:640});
});

$('.ui-btn-back').live('click',function() {
  $('#reposDetail').preventDefault();
});