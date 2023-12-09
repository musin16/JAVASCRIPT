package Ejercicio3Monitores;

public class Main {
	/*
	 * Ejercicio 3: Diseño un programa que simule un productor y un consumidor que
	 * comparten una cinta transportadora. El productor coloca productos (números
	 * aleatorios) en la cinta y el consumidor los retira.La cinta transportadora
	 * tiene una capacidad máxima de 10 productos.Cada vez que un productor coloca
	 * algo en la cinta y el consumidor lo retira, debe esperar un tiempo aleatorio
	 * que represente el tiempo que tarda en hacer el trabajo. Inventa un mecanismo
	 * que simule de forma indefinida el trabajo en esta cinta en el que se
	 * produzcan picos de trabajo ocasionalmente. Use mecanismo thread normal.
	 */
	public static void main(String[] args) {
		Cinta c = new Cinta();
		Thread prodc = new Thread(new Productor(c));
		prodc.start();
		Thread th = new Thread(new Consumidor(c, "Consumidor"));
		th.start();
	}
}
