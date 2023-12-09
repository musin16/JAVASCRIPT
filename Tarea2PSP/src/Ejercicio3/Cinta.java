package Ejercicio3;

import java.util.concurrent.Semaphore;

public class Cinta {

	private Semaphore sm;
	public final int CONTADOR = 10;
	public static int[] producto = new int[10];
	public static int[] productoMostrar = new int[10];

	public Cinta(Semaphore sm) {
		this.sm = sm;
	}

	public int producir(int cont) {
		sm.release();
		if (cont < 10) {
			producto[cont] = (int) (Math.random() * 100);
			productoMostrar[cont] = producto[cont];
		} else {
			for (int i = 0; i < producto.length; i++) {
				producto[i] = 0;
			}
		}
		return producto[cont];
	}

	public int consumir(int cont) {
		try {
			sm.acquire();
			cont = cont % CONTADOR;
			return producto[cont];
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return 0;
	}
}
