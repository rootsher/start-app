define('testModule', [ 'when/when' ], function module(when) {
    console.log('when/when:', when);

    // Emit message.
    eventEmitter.emit('message', { it: 'works' });

    return { hello: 'world' };
});
