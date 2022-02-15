(function($) {

  $('.hamburger-icon').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
    $('.hamburger-box').toggleClass('is-open');
    $('.hamburger-background').toggleClass('is-open');
    $('body').toggleClass('fixed');
  });

  $('.hamburger-background').on('click', function() {
    $(this).removeClass('is-open');
    $('.hamburger-box').removeClass('is-open');
    $('.hamburger-icon').removeClass('is-open');
    $('body').removeClass('fixed');
  });

  $('.hamburger-nav-item a[href]').on('click', function() {
    $('.hamburger-icon').removeClass('is-open');
    $('.hamburger-box').removeClass('is-open');
    $('.hamburger-background').removeClass('is-open');
    $('body').removeClass('fixed');
  });

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    let header = $(".header").innerHeight();
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    $("html, body").animate (
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });

  $('.works-item-link').on('click', function(e) {
    e.preventDefault();
    $(this).nextAll('.modal , .modal-overlay').fadeIn();
    $('body').addClass('fixed');
  });
  $('.modal-close, .modal-overlay').on('click', function() {
    $('.modal-overlay , .modal').fadeOut();
    $('body').removeClass('fixed');
  });

  $('.totop').hide();
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.totop').fadeIn(300);
    } else {
      $('.totop').fadeOut(300);
    }
    // scrollHeight = $(document).height(); //ドキュメントの高さ
    // scrollPosition = $(window).height() + $(window).scrollTop(); //現在地
    // footHeight = $('footer').innerHeight(); //フッターの高さ
    // if ( scrollHeight - scrollPosition < footHeight ) {
    //   $('.totop').css({
    //     'position' : 'absolute',
    //     'bottom' : footHeight + 40
    //   })
    // } else {
    //   $('.totop').css({
    //     'position' : 'fixed',
    //     'bottom' : '40px'
    //   })
    // }
  });
  
  $('.totop').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

})(jQuery);