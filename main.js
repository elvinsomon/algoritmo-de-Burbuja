//Los jugadores generalmente se sientan en círculo. El jugador designado para ir primero dice el número "1", y cada jugador cuenta un número por turno. Sin embargo, cualquier número divisible por tres se reemplaza por la palabra "Marvel" y cualquier número divisible por cinco por la palabra "DC". Los números divisibles por 3 y 5 se convierten en "Marvel - DC". Un jugador que duda o comete un error es eliminado del juego.

//var jugadores = new array[40]();

for (let x = 1; x < 40; x++) {
	if (!(x % 3 == 0 || x % 5 == 0)) {
		console.log(x);
	} else if (x % 3 == 0 && x % 5 == 0) {
		console.log(' Marvel - DC');
	} else if (x % 3 == 0) {
		console.log(' Marvel');
	} else if (x % 5 == 0) {
		console.log(' DC');
	}
}
