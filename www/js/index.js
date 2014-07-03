/*
 * Peke's Project
 */

$('#reposDetail').live('pageshow', function(event) {
    $('a.media').media({width:340, height:600});
});

$('.ui-btn-back').live('click',function() {
  $('#pekeHome').preventDefault();
});