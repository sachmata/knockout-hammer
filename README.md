knockout-hammer
===============

Knockout custom bindings for Hammer.js multi-touch gestures library

* knockout (https://github.com/knockout/knockout)
* hammer.js (https://github.com/hammerjs/hammer.js)


Usage:
-
data-bind="hmHold: holdHandlerFn, hmOptions: { recognizers: [ [Hammer.Press, {time:5000}] ] }

Notes:
-
Tested with knockout v3.1.0 and hammer.js v2.0.2.