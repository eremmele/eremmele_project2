var tween = new ui.Tween({
    values: { x: 200 },
    ease: 'easeIn',
    duration: 500
});

var simulation = new ui.Simulate({
    values: { x: {} }
});

ball.start(tween);

setTimeout(function () {
    ball.start(simulation);
}, 250);

new ui.Simulate({
    values: {
        x: 200 // equivalent to x: { velocity: 200 }
    }
});

new ui.Simulate({
    values: {
        x: {
            velocity: 200,
            acceleration: 200
        }
    }
});

new ui.Simulate({
    values: {
        x: {
            velocity: 2000,
            friction: 0.1
        }
    }
});

new ui.Simulate({
    values: {
        x: {
            velocity: 200,
            max: 400
        }
    }
});

new ui.Simulate({
    values: {
        x: {
            velocity: 500,
            min: 0,
            max: 400,
            bounce: 0.75
        }
    }
});

new ui.Simulate({
    values: {
        y: {
            velocity: 100,
            acceleration: 1800,
            max: 250,
            bounce: .8
        }
    }
});

new ui.Simulate({
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