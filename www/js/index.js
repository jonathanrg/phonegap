/*
 * Peke's Project
 */

$('#reposDetail').live('pageshow', function(event) {
    $('a.media').media({width:300, height:500});
});

$('.ui-btn-back').live('click',function() {
  $('#reposDetail').preventDefault();
});