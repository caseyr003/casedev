$( function() {

  $( '.menu-toggle' ).on( 'click', function() {
    $( '.menu-item' ).toggleClass( 'menu-open' );
    $( '.overlay' ).toggleClass( 'overlay-open' );
  });

});
