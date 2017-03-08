export function scrollTo(x, y, scrollDuration) {
    x = Math.abs(x || 0);
    y = Math.abs(y || 0);
    scrollDuration = scrollDuration || 2000;

    var currentScrollY = window.scrollY,
        currentScrollX = window.scrollX,
        dirY = y > currentScrollY ? 1 : -1,
        dirX = x > currentScrollX ? 1 : -1,
        tick = 16.6667, // 1000 / 60
        scrollStep = Math.PI / ( scrollDuration / tick ),
        cosParameterY = currentScrollY / 2,
        cosParameterX = currentScrollX / 2,
        scrollCount = 0,
        scrollMargin;

    function step() {        
        scrollCount = scrollCount + 1;  

        if ( window.scrollX !== x ) {
            scrollMargin = cosParameterX + dirX * cosParameterX * Math.cos( scrollCount * scrollStep );
            window.scrollTo( 0, ( currentScrollX - scrollMargin ) );
        } 

        if ( window.scrollY !== y ) {
            scrollMargin = cosParameterY + dirY * cosParameterY * Math.cos( scrollCount * scrollStep );
            window.scrollTo( 0, ( currentScrollY - scrollMargin ) );
        } 

        if (window.scrollX !== x || window.scrollY !== y) {
            requestAnimationFrame(step);
        }
    }

    step();
}