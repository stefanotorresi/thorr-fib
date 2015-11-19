describe("fib(n)", function(){
	describe("when n < 1", function(){
		it("should throw", function() {
			expect(function(){ Thorr.fib(0); }).toThrow();
		});
	});
	describe("when n = 1 or 2", function(){
		it("should return an array of ones", function(){
			expect(Thorr.fib(1)).toEqual([1]);
			expect(Thorr.fib(2)).toEqual([1, 1]);
		});
	});
	describe("when n >= 1", function(){
		it("should return an array of n elements", function() {
			for(var n = 1; n <= 3; n++) {
				expect(Thorr.fib(n).length).toBe(n);
			}
		});
	});
	describe("when n > 2", function(){
		it("should sum each nth-1 element to nth-2 and return them in an array", function() {
			expect(Thorr.fib(3)).toEqual([1, 1, 2]);
			expect(Thorr.fib(4)).toEqual([1, 1, 2, 3]);
			expect(Thorr.fib(5)).toEqual([1, 1, 2, 3, 5]);
			expect(Thorr.fib(6)).toEqual([1, 1, 2, 3, 5, 8]);
		});
	});
});
