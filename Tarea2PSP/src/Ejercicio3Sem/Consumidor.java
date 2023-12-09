package Ejercicio3Sem;

public class Consumidor implements Runnable {
	public Cinta cinta;
	public String nom;
	public static int[] cons = new int[15];
	public static int contadorConsumo = -1;
	public Productor pr;

	public Consumidor() {

	}

	public Consumidor(Cinta c, String nom) {
		this.cinta = c;
		this.nom = nom;
		pr = new Productor(c);
	}

	@Override
	public void run() {
		while (true) {
			try {
				if (contadorConsumo < 9) {
					contadorConsumo += 1;
					System.out.println(nom + " esta esperando producto  " + Cinta.productoMostrar[contadorConsumo]);
					int valor = cinta.consumir(contadorConsumo);
					System.out.println(nom + " ha obtenido su producto " + valor);
					Thread.sleep((int) (Math.random() * 2000));
					
				} else {
					contadorConsumo = 0;
				}
			} catch (InterruptedException e) {
				e.printStackTrace();
			}

		}

	}

}
