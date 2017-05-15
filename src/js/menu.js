$( function() {
   $( '.menu-toggle' ).on( 'click', function() {
      $( '.menu-item' ).toggleClass( 'menu-open' );
      $( '.overlay' ).toggleClass( 'overlay-open' );
      $( '.top' ).toggleClass( 'top-open' );
      $( '.middle' ).toggleClass( 'middle-open' );
      $( '.bottom' ).toggleClass( 'bottom-open' );
   });
});
