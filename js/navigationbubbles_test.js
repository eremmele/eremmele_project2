$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    $('.a').animate({ top: newq[.2], left: newq[1] }, function(){
      animateDiv();        
    });
    $('.b').animate({ top: newq[0], right: newq[1] }, function(){
      animateDiv();        
    });
    $('.c').animate({ bottom: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    $('.d').animate({ bottom: newq[0], right: newq[1] }, function(){
      animateDiv();        
    });

    
};