/**
 * author Adrian Cerezo
 * 
 * Pukt
 * Description
 *
 * */

!(function (scope) {

	var Pukt = function () {
		var instance = function () {
			this.init.apply(this, arguments);
		}
		instance.init = function () {}

		return instance;
	}

}(window));
