// O(nlogn) | O(n);

function sortedSquaredArray(array) {
  // Write your code here.
	const result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(array[i]**2);
	}
  return result.sort((a, b) => a - b);
}

//  O(n) | O(n)

function sortedSquaredArray(array) {
  // Write your code here.
	let result = [];
	let smallest = 0;
	let largest = array.length - 1;
	for (let i = array.length - 1; i >= 0 ; i --) {
		const smallestValue = array[smallest];
		const largestValue = array[largest];
		if (Math.abs(smallestValue) > Math.abs(largestValue)) {
			result[i] = smallestValue * smallestValue;
			smallest ++;
		} else {
			result[i] = largestValue * largestValue;
			largest --;
		}
	}
  return result;
}

