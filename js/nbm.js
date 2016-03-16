if (!("ontouchstart" in document.documentElement)) {
    $( 'ul' ).removeClass( 'hidden', 600, 'easeOutQuad');
}
else {
    $( 'header' ).hover(
    function() {
        $( 'ul' ).removeClass( 'hidden', 600, 'easeOutQuad');
    }, 
    function() {
        $( 'ul' ).addClass( 'hidden', 600, 'easeInQuad');
    });
}