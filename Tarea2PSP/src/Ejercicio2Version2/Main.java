package Ejercicio2Version2;

public class Main {

	public static void main(String[] args) {
		long inicio=System.currentTimeMillis();
		for (int i = 0; i < args.length; i++) {
			MultiHiloFichero p = new MultiHiloFichero(args[i]);
			Thread th = new Thread(p);
			th.start();
			try {
				th.join();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		System.out.println("Los fichero en total tienen " + MultiHiloFichero.totalLetras + " caracteres y "
				+ MultiHiloFichero.totalPalabras + " palabras");
		long fin=System.currentTimeMillis()-inicio;
		System.out.println(fin);
	}

}
