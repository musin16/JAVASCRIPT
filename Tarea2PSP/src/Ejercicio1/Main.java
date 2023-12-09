package Ejercicio1;

public class Main {
	public static void main(String[] args) {
		/*
		 * Ejercicio 1: Crea un programa en Java que inicie tres hilos. Los 3 hilos
		 * mostrarán números hasta llegar al 100, comenzando en 1, 2 y 3 respectivamente
		 * e incrementándose de 3 en 3 en cada ocasión. Asegúrate de que los hilos se
		 * ejecuten en orden y que los números salen ordenados de menor a mayor.
		 */
		for (int i = 1; i < 4; i++) {
			Thread th = new Thread(new Hilos("Hilo " + i, i - 1));
			th.start();
		}
	}
}
