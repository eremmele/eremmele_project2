var ball = new ui.Actor('.ball');
var trackPointer = new ui.Track({
    values: {
        x: {},
        y: {}
    }
});
var springToCenter = new ui.Simulate({
    simulate: 'spring',
    friction: 0.15,
    spring: 300,
    values: {
        x: {
            to: 0
        },
        y: {
            to: 0
        }
    }
});

$('body').on('mousedown touchstart', '.ball', function (e) {
    e.preventDefault();
 
    ball.start(trackPointer, e);

    $('body').one('touchend mouseup', function () {
        ball.start(springToCenter);
    });
});