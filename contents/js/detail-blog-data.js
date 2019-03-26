$(function() {
  var $facebook = 'social-fb',
      $twitter = 'social-tw',
      $linkedin = 'social-ld';

  function shareFB($button,$url) {
    $button.attr('href', 'https://www.facebook.com/sharer/sharer.php?u='+$url)
  }

  function shareTW($button, $url, $text) {
    $button.attr('href', 'https://twitter.com/intent/tweet?text='+ $text +'&url='+ $url +'&via=nhatrangbooking')
  }

  function shareLD($button, $url, $text) {
    $button.attr('href', 'https://www.linkedin.com/shareArticle?mini=true&url='+ $url +'&title='+ $text +'&summary=NhaTrangBooking&source=https://nhatrangbooking.com.vn')
  }

  //share post, onclick for social share blog
  $('.social-share a').each(function() {
    var link = $(this).attr('href');
    if ($(this).hasClass($facebook)) {
      return shareFB($(this),link);
    } else if ($(this).hasClass($twitter)) {
      var text = $('h1').text();
      return shareFB($(this),link,text);
    } else {
      return shareLD($(this),link,text);
    }
  })
})