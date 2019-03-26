$(function() {
  $('.slide-item').each(function() {
    $(this).owlCarousel({
      items: parseFloat($(this).data('items')),
      loop: true,
      margin: 30,
      autoplay: true
    });
  });

  $('.btn-readmore').on('click', function() {
    $(this).parent().toggleClass('show');
    if ($(this).parent().hasClass('show')) {
      $(this).text('Thu gọn');
    } else {
      $(this).text('Xem chi tiết');
    }
    
  });
})