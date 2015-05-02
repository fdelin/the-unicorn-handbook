

$(function () {
  var $menu = $('nav#menu');

  $menu.mmenu({
    classes: 'mm-white',
    offCanvas: true,
    slidingSubmenus: true,
    searchfield: {
      add: true,
      search: true,
      placeholder: 'Start typing to filter the index...',
      noResults: 'Topic not found...',
      showLinksOnly: true
    },
    counters   : true
  });

  $menu.find( 'li > a:not(.mm-subclose):not(.mm-subopen)[href^="#"]' ).on('click', function(e) {
    e.preventDefault();

    var href = $(this).attr('href');
    var posY = $(href).offset().top - 100;

    // if the menu is open, close it before scrolling the page
    if( $menu.hasClass('mm-opened') ) {
      $menu.one('closed.mm', function() {
        $('html, body').animate({ scrollTop: posY });
      });
    }

    // if the menu is closed, no need to wait
    else {
      $('html, body').animate({ scrollTop: posY });
    }

  });
});

hljs.initHighlightingOnLoad();

