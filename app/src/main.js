require.config({
    baseUrl: '/src/modules',
    paths: {
        when: '/vendor/when',
        EventEmitter: '/vendor/eventemitter2/lib/eventemitter2',
        uuid: '/vendor/node-uuid/uuid',
        lodash: '/vendor/lodash/lodash'
    }
});

require([ 'EventEmitter' ], function config(EventEmitter) {
    window.eventEmitter = new EventEmitter({
        maxListeners: 32
    });
});

require([ 'when/when', 'when/node', 'when/callbacks', 'uuid', 'lodash' ], function run(when, nodefn, callbacks, uuid, lodash) {
    console.log('@', uuid.v4());
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
