if (typeof Thorr === 'undefined') {
	function Thorr() {}
}

(function(){

	function fib(n) {
		if (n < 1) {
			throw 'n must be >= 1';
		}
		if (n === 1) {
			return [ 1 ];
		}
		if (n === 2) {
			return [ 1, 1 ];
		}
		var numbers = fib(n-1);
		numbers.push(numbers[numbers.length-1] + numbers[numbers.length-2]);

		return numbers;
	}

	Thorr.fib = fib;

})();

if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
	module.exports = Thorr.fib;
}
