function digest() {
    "use strict";

    inject(function($rootScope) {
        $rootScope.$digest();
    });
}

function flush() {
    "use strict";

    inject(function($httpBackend) {
        $httpBackend.flush();
    });
}

function resolvedDeferred(value) {
    "use strict";

    var $q,
        deferred;
    inject(function(_$q_) {
        $q = _$q_;
    });
    deferred = $q.defer();
    deferred.resolve(value);
    return deferred;
}

function rejectedDeferred(value) {
    "use strict";

    var $q,
        deferred;
    inject(function(_$q_) {
        $q = _$q_;
    });
    deferred = $q.defer();
    deferred.reject(value);
    return deferred;
}

function triggerClick(element, x, y) {
    "use strict";

    var e = angular.element.Event("click");

    e.pageX = x;
    e.pageY = y;

    element.trigger(e);
}

function triggerKeyup(element, keyCode) {
    "use strict";

    var e = angular.element.Event("keyup");

    e.keyCode = e.which = keyCode;
    element.val(String.fromCharCode(keyCode)).trigger(e);
}

function unpromise(promise) {
    var result = {};
    promise
        .then(function(t) {
            result.then = t;
        })
        .catch(function(c) {
            result.catch = c;
        });
    digest();
    return result;
}
