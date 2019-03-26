// script for all page

$(function() {
  var $body = $('body');
  var $overlay = 'screen-overlay';

  $(document).on('scroll', function() {
    if ($(this).scrollTop() >= 5) {
      return $('.header').addClass('fixed');
    } else {
      return $('.header').removeClass('fixed');
    }
  });



  //btn-toggle-menu on click
  $('.btn-toggle-menu').click(function() {
    var $this = $(this);
    $('.menu').toggleClass('active');
    $('.header').toggleClass('fixed-screen');
    $body.toggleClass('fixed-screen');

    if ($body.hasClass('fixed-screen')) {
      $body.append(`<div class="${$overlay}"></div>`);
      $this.children('i').removeClass('fa-bars').addClass('fa-times');
      $(`.${$overlay}`).click(function() {
        $(this).remove();
        $('.menu').removeClass('active');
        $('.header').removeClass('fixed-screen');
        $body.removeClass('fixed-screen');
        $this.children('i').removeClass('fa-times').addClass('fa-bars');
      })
    } else {
      return $(`.${$overlay}`).trigger('click');
    }

    // if ($(`.${$overlay}`).length !== 0) {
    //   $(`.${$overlay}`).remove();
    // } else {
    //   $body.append(`<div class="${$overlay}"></div>`);
    //   $(`.${$overlay}`).click(function() {
    //     $(this).remove();
    //     $('.menu').removeClass('active');
    //   })
    // }
  });

  $('.menu .menu-parent > a').click(function() {
    $(this).parent().toggleClass('active');
    $(this).toggleClass('focus');
  })

  //btn-close-menu on click
  // $('.btn-close-menu').click(function() {
  //   $('.nav-menu-responsive').removeClass('active');
  //   $(`.${$overlay}`).remove();
  // })

  


  // menu-parent > a on click: for responsive
  $('.nav-menu-responsive .menu-parent > a').click(function(event) {
    $(this).toggleClass('active');
    $(this).parent(event.target.parentNode).children('.sub-menu').toggleClass('show');

  });

  // btn-search on click
  $('.btn-toggle-search').click(function() {
    var search = $('.search-bar');
    search.toggleClass('show');
    search.find('i').removeClass('fas fa-search').addClass('fas fa-times');
    search.find('i').click(function() {
      search.removeClass('show');
      search.find('i').removeClass('fas fa-times').addClass('fas fa-search');
      $(`.${$overlay}`).remove();
    });

    if ($(`.${$overlay}`).length !== 0) {
      $(`.${$overlay}`).remove();
    } else {
      $body.append(`<div class="${$overlay}"></div>`);
      $(`.${$overlay}`).click(function() {
        $(this).remove();
        search.find('i').removeClass('fas fa-times').addClass('fas fa-search');
        search.removeClass('show');
      })
    }

  });

  //enable tooltip any page
  $('[data-toggle="tooltip"]').tooltip();

  // var lazyLoadInstance = new LazyLoad({
  //     elements_selector: ".lazy"
  //     // ... more custom settings?
  // });
});