/*
* Knockout Hammer
* knockout (https://github.com/knockout/knockout)
* hammer.js (https://github.com/hammerjs/hammer.js)
* Usage: data-bind="hmHold: holdHandlerFn, hmOptions: { recognizers: [ [Hammer.Press, {time:5000}] ] }"
*/

(function () {
	var events = ['tap', 'doubletap', 'press', 'pan', 'swipe', 'pinch', 'rotate'];

	ko.utils.arrayForEach(events, function (eventName) {
		var hmEventName = 'hm' + eventName.substring(0, 1).toUpperCase() + eventName.substring(1).toLowerCase();
		var hammer, handler;

		ko.bindingHandlers[hmEventName] = {
			init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
				// This will be called when the binding is first applied to an element
				// Set up any initial state, event handlers, etc. here
				var options;

				if (!valueAccessor()) {
					return false;
				}
				hammer = Hammer(element, {});

				options = valueAccessor().hmOptions || {};
				handler = valueAccessor().bind(bindingContext.$data);

				hammer.on(eventName, function (event) {
					//Like default knockout return the data as the first parameter and the event data as the second.
					handler(bindingContext.$data, event);
				});

				//handle disposal (if KO removes by the template binding)
				ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
					if (typeof (hammer) != 'undefined' && hammer != null) {
						hammer.destroy();
					}

					hammer = null;

					return true;
				});

				return true;
			},
			update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
				// This will be called once when the binding is first applied to an element,
				// and again whenever any observables/computeds that are accessed change
				// Update the DOM element based on the supplied values here.
				var options;

				if (!valueAccessor()) {
					return false;
				}

				if (typeof (hammer) != 'undefined' && hammer != null) {
					hammer.off(eventName, handler);
				}
				else {
					hammer = Hammer(element, {});
				}

				options = valueAccessor().hmOptions || {};
				handler = valueAccessor().bind(bindingContext.$data);

				hammer.on(eventName, function (event) {
					//Like default knockout return the data as the first parameter and the event data as the second.
					handler(bindingContext.$data, event);
				});
			}
		}
	});
}).call(this);