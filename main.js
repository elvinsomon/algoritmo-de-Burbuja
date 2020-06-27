//var jugadores = new array[40]();

let salida = document.getElementById('salidaMarvelDC');
let result = '';
for (let x = 1; x < 40; x++) {
	if (!(x % 3 == 0 || x % 5 == 0)) {
		console.log(x);
		result += x + `<br>`;
	} else if (x % 3 == 0 && x % 5 == 0) {
		console.log(' Marvel - DC <br>');
		result += 'Marvel - DC <br>';
	} else if (x % 3 == 0) {
		console.log(' Marvel');
		result += 'Marvel <br>';
	} else if (x % 5 == 0) {
		console.log(' DC');
		result += 'DC <br>';
	}
}

salida.innerHTML = result;

var nums = [10, 80, 70, 44, 78, 5, 4];

//Ordene el array anterior de la siguiente forma  = {4,5,10,44,70,78,80}

while (
	nums[0] > nums[1] ||
	nums[1] > nums[2] ||
	nums[2] > nums[3] ||
	nums[3] > nums[4] ||
	nums[4] > nums[5] ||
	nums[5] > nums[6]
) {
	if (nums[5] > nums[6]) {
		let nuevosValores = cambio(nums[5], nums[6]);
		nums[5] = nuevosValores[0];
		nums[6] = nuevosValores[1];
	} else if (nums[4] > nums[5]) {
		let nuevosValores = cambio(nums[4], nums[5]);
		nums[4] = nuevosValores[0];
		nums[5] = nuevosValores[1];
	} else if (nums[3] > nums[4]) {
		let nuevosValores = cambio(nums[3], nums[4]);
		nums[3] = nuevosValores[0];
		nums[4] = nuevosValores[1];
	} else if (nums[2] > nums[3]) {
		let nuevosValores = cambio(nums[2], nums[3]);
		nums[2] = nuevosValores[0];
		nums[3] = nuevosValores[1];
	} else if (nums[1] > nums[2]) {
		let nuevosValores = cambio(nums[1], nums[2]);
		nums[1] = nuevosValores[0];
		nums[2] = nuevosValores[1];
	} else if (nums[0] > nums[1]) {
		let nuevosValores = cambio(nums[0], nums[1]);
		nums[0] = nuevosValores[0];
		nums[1] = nuevosValores[1];
	}
}

function cambio(pos1, pos2) {
	return [pos2, pos1];
}

let salida2 = document.getElementById('salidaBurbuja');
salida2.innerHTML = nums;
console.log(nums);
