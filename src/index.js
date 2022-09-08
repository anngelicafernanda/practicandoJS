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

const Validar = () => {
	let lstNumero = document.getElementsByClassName('numero'),
		arrayGuardar = [];
	for (var i = 0; i < lstNumero.length; i++) {
		arrayGuardar[i] = lstNumero[i].valueAsNumber;
	}
	return (document.getElementById('result').innerHTML = maxValue(
		arrayGuardar,
		max,
	));
};
