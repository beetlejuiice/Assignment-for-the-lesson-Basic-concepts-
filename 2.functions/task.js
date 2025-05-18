function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	if (arr.length === 0) {
		return null;
	}
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		if (num < min) {
			min = num;
		}
		if (num > max) {
			max = num;
		}
		sum += num;
	}
	let avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}
console.log(getArrayParams(1, 2, 3, 4, 5, -77, 44));

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return arr.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEven = 0;
	let sumOdd = 0;
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		if (num % 2 === 0) {
			sumEven += num;
		} else {
			sumOdd += num;
		}
	}
	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEven = 0;
	let countEven = 0;
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		if (num % 2 === 0) {
			sumEven += num;
			countEven++;
		}
	}
	if (countEven === 0) {
		return 0;
	}
	return sumEven / countEven;
}
console.log(summElementsWorker(11, 47, 74, 1, 4));
console.log(differenceMaxMinWorker(11, 47, 74, 1, 4));
console.log(differenceEvenOddWorker(11, 47, 74, 1, 4));
console.log(averageEvenElementsWorker(11, 47, 74, 1, 4));

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}
let arr = [
	[99, 88, 77, 66, 55]
];
console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));