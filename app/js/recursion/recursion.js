var recursionFunct = (function(){




	var list = {

		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 4,
					next: null
				}
			}
		}
	};

	function walkByList(list) {

		var result = [];

		function doPushList(list) {

			if(!list) return null;

			doPushList(list.next);

			console.log(list.value);

			result.push(list.value);
			
			return result;


		}

		doPushList(list);
		return result;
	}

console.log(walkByList(list));



})();