// Determine the number of LI elements in the group
    var lis = $('li').length; 
    // Find the width of the LI elements. This should be a constant, in other words indentical for all LI elements in the group. jQuery width does NOT compensate for borders or padding.
    var liWidth = $('li').width();
    // Multiply those two figures together to find the necessary length for the UL to enclose them
    var ulWidth = lis * liWidth; 
    var windowSize = 2 * liWidth;
    var slideLimit = windowSize - ulWidth;
    var slideLimitBack = windowSize - ulWidth;

$(function(){
    // Apply that length to the UL
    $('ul').width(ulWidth); 
});

$('button.bk').click(function(){
    var x = $('ul').position();
    y = x.left;
    z = x.left + liWidth + 'px';
    console.log(slideLimitBack);
    
    if(y >= 0) {

    } else {
    $('ul').animate({
        left: z
    }, 500) ;
    }
    stop;
});

$('button.fwd').click(function(){
    var x = $('ul').position();
    y = x.left;
    z = x.left - liWidth + 'px';
    $('ul').stop();
    
    if(y <= slideLimit) {
    $('ul').animate({
        left: '0px'
    }, 500) ;


    } else {
    $('ul').animate({
        left: z
    }, 500) ;
    }
        stop;
});