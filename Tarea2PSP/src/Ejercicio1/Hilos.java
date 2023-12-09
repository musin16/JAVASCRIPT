package Ejercicio1;

public class Hilos implements Runnable {
	private String nombre;
	private int turno;
	private static int contador = 0;
	public static Object lock = new Object();

	public Hilos(String nombre, int turno) {
		this.nombre = nombre;
		this.turno = turno;
	}

	@Override
	public void run() {
		synchronized (lock) {
			while (contador < 98) {
				while (contador % 3 != turno) {
					try {
						lock.wait();
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
				contador++;
				System.out.println(this.nombre + " " + contador);
				lock.notifyAll();
			}
		}
	}
}
