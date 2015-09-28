// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require) {
	var _ = require('underscore');
	var Backbone = require('backbone');
	var Origin = require('coreJS/app/origin');

	var Notify = Origin.Notify;

	if(!Notify) {
		Notify = Origin.Notify = _.extend({}, Backbone.Events);

		Notify.register = function(name, func) {
			Notify[name] = func;
		};

		loadPLugins();
	}

	// loads the built-in plugins in ./plugins
	function loadPLugins() {
		var notifyAlert = require('./plugins/alert/index');
		notifyAlert();

		var notifyConsole = require('./plugins/console/index');
		notifyConsole();

		var notifyToast = require('./plugins/toast/index');
		notifyToast();
	};

	return Notify;
});
