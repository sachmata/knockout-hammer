###
* Knockout Hammer
* knockout (https://github.com/SteveSanderson/knockout)
* hammer.js (https://github.com/EightMedia/hammer.js)
* Usage: data-bind="hmHold: holdHandlerFn, hmOptions: { hold_timeout: 400 }"
* http://jsfiddle.net/9AA7U/1/
###

[
    'hold',
    'tap',
    'doubletap',
    'drag', 'dragstart', 'dragend', 'dragup', 'dragdown', 'dragleft', 'dragright',
    'swipe', 'swipeup', 'swipedown', 'swipeleft', 'swiperight',
    'transform', 'transformstart', 'transformend',
    'rotate',
    'pinch', 'pinchin', 'pinchout',
    'touch',
    'release'
].forEach (gesture) ->
    ko.bindingHandlers["hm#{gesture[0].toUpperCase()}#{gesture[1..-1].toLowerCase()}"] = 
        init: (element, valueAccessor, allBindingsAccessor, data) ->
            return false unless valueAccessor() 

            options = allBindingsAccessor().hmOptions or {}
            handler = valueAccessor().bind data
            data.hammer ?= Hammer element, options

            data.hammer.on gesture, handler
            
            ko.utils.domNodeDisposal.addDisposeCallback element, () ->
                data.hammer.off gesture, handler
            true
