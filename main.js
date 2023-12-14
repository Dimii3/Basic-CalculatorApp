const numbersBtn = document.querySelectorAll('.number');
const result = document.querySelector('.result');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
const operatorBtn = document.querySelectorAll('.operator');

let resultValue = '';
let currentSymbol;

numbersBtn.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		resultValue += e.target.textContent;
		result.value = resultValue;
	});
});

operatorBtn.forEach((operator) => {
	operator.addEventListener('click', (e) => {
		if (currentSymbol === e.target.textContent) {
			operator.disabled = true;
		} else {
			currentSymbol = e.target.textContent;
			resultValue += e.target.textContent;
			result.value = resultValue;
		}
	});
});

decimal.addEventListener('click', (e) => {
	resultValue += e.target.textContent;
	result.value = resultValue;
});

const resetOperators = () => {
	currentSymbol = '';
	operatorBtn.forEach((operator) => {
		operator.disabled = false;
	});
};

const getResult = () => {
	let sum = 0;
	sum = resultValue.split(currentSymbol).map((el) => Number(el));
	switch (currentSymbol) {
		case '+':
			resultValue = sum.reduce((curr, acc) => curr + acc);
			break;
		case '-':
			resultValue = sum.reduce((curr, acc) => curr - acc);

			break;
		case '*':
			resultValue = sum.reduce((curr, acc) => curr * acc);

			break;
		case '/':
			resultValue = sum.reduce((curr, acc) => curr / acc);
			break;
	}
	if (!Number.isInteger(resultValue)) {
		resultValue = Number(resultValue).toFixed(2);
	}
	result.value = resultValue;
	resetOperators();
	console.log(currentSymbol);
};

const clear = () => {
	resetOperators();
	console.log(currentSymbol);
	result.value = '';
	resultValue = '';
};

clearBtn.addEventListener('click', clear);
equalBtn.addEventListener('click', getResult);
