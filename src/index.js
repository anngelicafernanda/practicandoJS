const arrayNumbers = [11, 4, 6, 7, 8, 4];
let max = 0;

const maxValue = (arrayNumbers, max) => {
	for (let index = 0; index < arrayNumbers.length; index++) {
		const element = arrayNumbers[index];
		if (element > max) {
			max = element;
		}
	}
	return max;
};

console.log(maxValue(arrayNumbers, max));
