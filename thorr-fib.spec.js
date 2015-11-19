'use strict';

var fib = require('./thorr-fib');

describe("fib(n)", function(){
	describe("when n < 1", function(){
		it("should throw", function() {
			expect(function(){ fib(0); }).toThrow();
		});
	});
	describe("when n = 1 or 2", function(){
		it("should return an array of ones", function(){
			expect(fib(1)).toEqual([1]);
			expect(fib(2)).toEqual([1, 1]);
		});
	});
	describe("when n >= 1", function(){
		it("should return an array of n elements", function() {
			for(var n = 1; n <= 3; n++) {
				expect(fib(n).length).toBe(n);
			}
		});
	});
	describe("when n > 2", function(){
		it("should sum each nth-1 element to nth-2 and return them in an array", function() {
			expect(fib(3)).toEqual([1, 1, 2]);
			expect(fib(4)).toEqual([1, 1, 2, 3]);
			expect(fib(5)).toEqual([1, 1, 2, 3, 5]);
			expect(fib(6)).toEqual([1, 1, 2, 3, 5, 8]);
		});
	});
});
