package Ejercicio2Version1;

public class Main {

	public static void main(String[] args) {
		long inicio=System.currentTimeMillis();
		HiloFichero p = new HiloFichero(args);
		Thread th = new Thread(p);
		th.start();
		try {
			th.join();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("Tardo "+ (System.currentTimeMillis()-inicio));
	}

}
