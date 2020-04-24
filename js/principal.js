$('a','.nav-tabs > li').hover(function(){ 
    $(this).trigger('click'); 
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.tab-pane').not($(this).attr('href')).removeClass('active');
  });