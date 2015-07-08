require.config({
    baseUrl: '/src/modules',
    paths: {
        when: '/vendor/when',
        EventEmitter: '/vendor/eventemitter2/lib/eventemitter2'
    }
});

require([ 'EventEmitter' ], function config(EventEmitter) {
    window.eventEmitter = new EventEmitter({
        maxListeners: 32
    });
});

require([ 'when/when', 'when/node', 'when/callbacks' ], function run(when, nodefn, callbacks) {
    // Register handler for message.
    eventEmitter.on('message', function (message) {
        console.log('@', message);
    });

    var argumentList = Array.prototype.slice.call(arguments);

    argumentList.forEach(function (argument) {
        console.log('*', argument);
    });
});

require([ 'testModule' ], function runTestModule(testModule) {
    console.log('#', testModule);
});
