var myActor = new ui.Actor({
    onUpdate: function (output) {
        console.log(output);
    }
});

var foo = new ui.Simulate({
    values: {
        x: 100
    }
});

myActor.start(fooTween);

var ballActor = new ui.Actor('#ball');

ballActor.start(foo);

var foo = new ui.Track({
    values: {
        x: {}
        // equivalent to
        // x: { watch: 'x' }
    }
});

$('body').on('mousedown touchstart', '#ball', function (event) {
    event.stopPropagation();
    event.preventDefault();

    ballActor.start(foo, event);
});

$('body').on('mousedown touchstart', '#ball', function (event) {
    event.stopPropagation();
    event.preventDefault();
    
    ballActor.start(foo, event);

    $('body').one('mouseup touchend', function () {
        ballActor.stop();
    });
});

