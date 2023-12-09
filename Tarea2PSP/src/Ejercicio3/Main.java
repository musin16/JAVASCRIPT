package Ejercicio3;

import java.util.concurrent.Semaphore;

public class Main {
	/*
	 * Ejercicio 3: Diseña un programa que simule un productor y un consumidor que
	 * comparten una cinta transportadora. El productor coloca productos (números
	 * aleatorios) en la cinta y el consumidor los retira. La cinta transportadora
	 * tiene una capacidad máxima de 10 productos. Cada vez que un productor coloca
	 * algo en la cinta y el consumidor lo retira, debe esperar un tiempo aleatorio
	 * que represente el tiempo que tarda en hacer el trabajo. Inventa un mecanismo
	 * que simule de forma indefinida el trabajo en esta cinta en el que se
	 * produzcan picos de trabajo ocasionalmente. Haz una versión de la aplicación
	 * que utilice semáforos y otra que use otro mecanismo.
	 */
	public static void main(String[] args) {
		Semaphore sConsumo = new Semaphore(0);
		Cinta c = new Cinta(sConsumo);
		Thread prodc = new Thread(new Productor(c));
		prodc.start();
		Thread th = new Thread(new Consumidor(c, "Consumidor 1"));
		th.start();
	}
}
