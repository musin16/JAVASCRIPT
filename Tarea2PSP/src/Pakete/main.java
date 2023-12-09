package Pakete;

public class main {
	public static void main(String[] args) {

		Thread P = new Thread(new p1());
		p2 pp = new p2();
		
		P.start();
		
		pp.start();
		try {
			pp.join();
			System.out.println("SIGUE");
		} catch (InterruptedException e) {
			e.printStackTrace();
		}



	}
}
