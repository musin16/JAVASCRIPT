package Ejercicio3Sem;

public class Productor implements Runnable {
	Cinta c;
	static int cant = 0;
	public static int contProducir = 0;

	public Productor(Cinta c) {
		this.c = c;
	}

	@Override
	public void run() {
		while (true) {
			try {
				if (cant != 0) {
					if (contProducir < 10) {
						int valor = c.producir(contProducir);
						contProducir++;
						System.out.println("Se ha creado un producto " + valor);
						Thread.sleep((int) (Math.random() * 500));
						c.smConsumidor.release();
					} else {
						contProducir = 0;
					}
				} else {
					cant++;
					int valor = c.producir(contProducir);
					contProducir++;
					System.out.println("Se ha creado un producto " + valor);
					c.smConsumidor.release();
					break;
				}
			} catch (InterruptedException e) {
				e.printStackTrace();
			}

		}
	}
}
