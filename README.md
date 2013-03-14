knockout-hammer
===============

Knockout custom bindings for Hammer.js multi-touch gestures library

knockout (https://github.com/SteveSanderson/knockout)
hammer.js (https://github.com/EightMedia/hammer.js)

Usage:
data-bind="hmHold: holdHandlerFn, hmOptions: { hold_timeout: 400 }"

http://jsfiddle.net/9AA7U/1/

TODO: ?? Use jQuery hammer.js plugin for IE support
TODO: ?? Refactor to -> data-bind="hmEvent: { hold: holdHandlerFn }, hmOptions: { hold_timeout: 400 }"
