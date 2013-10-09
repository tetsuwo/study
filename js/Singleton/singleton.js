/*!
 * Singleton
 * @role Singleton
 */

var Singleton = (function () {
    var instance;
    function init() {
        function privateMethod() {
            console.log("I am private");
        }
        var privateVariable = "I am also private";
        private
    }
    return {
        getInstance: function() {
            if (!instance) instance = init();
            return instance;
        }
    };
})();
