(function() {
    'use strict';

    require('array.prototype.fill');

    function fib(n) {
        if (n < 1) {
            throw 'n must be >= 1';
        }
        if (n === 1 || n === 2) {
            return new Array(n).fill(1);
        }
        var numbers = fib(n - 1);
        numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);

        return numbers;
    }

    module.exports = fib;

})();
