$( function() {
   $( '.menu-toggle' ).on( 'click', function() {
      $( '.menu-item' ).toggleClass( 'menu-open' );
      $( '.overlay' ).toggleClass( 'overlay-open' );
      $( '.top' ).toggleClass( 'top-open' );
      $( '.middle' ).toggleClass( 'middle-open' );
      $( '.bottom' ).toggleClass( 'bottom-open' );
   });
   $( '.overlay' ).on( 'click', function() {
      $( '.menu-item' ).removeClass( 'menu-open' );
      $( '.overlay' ).removeClass( 'overlay-open' );
      $( '.top' ).removeClass( 'top-open' );
      $( '.middle' ).removeClass( 'middle-open' );
      $( '.bottom' ).removeClass( 'bottom-open' );
   });
});
