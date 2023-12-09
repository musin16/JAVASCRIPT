package Ejercicio3;

public class Productor implements Runnable {
	Cinta c;
	static int cant = 0;
	public static volatile int contProducir = 0;

	public Productor(Cinta c) {
		this.c = c;
	}

	@Override
	public void run() {
		while (true) {
			try {
				if (c.CONTADOR > contProducir) {
					Cinta.productoMostrar[contProducir] = c.producir(contProducir);
					System.out.println("Se ha creado un producto " + Cinta.productoMostrar[contProducir]);
					contProducir++;
					Thread.sleep((int) (Math.random() * 100));
				} else {
					if (Consumidor.contadorConsumo == contProducir) {
						Consumidor.contadorConsumo = -1;
						contProducir = 0;
					}

				}
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}
