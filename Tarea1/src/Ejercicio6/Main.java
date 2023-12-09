package Ejercicio6;

import java.io.IOException;
import java.lang.ProcessBuilder.Redirect;

public class Main {

	public static void main(String[] args) {
		for (int i = 0; i < 5; i++) {
			try {
				String[] comadno = { "java", "src/Ejercicio6/Ejercicio6.java", "App " + (i + 1) + " ",
						String.valueOf(Math.round((Math.random() * 100))) };
				ProcessBuilder pb = new ProcessBuilder(comadno);
				pb.redirectOutput(Redirect.INHERIT);
				Process p = pb.start();
				p.waitFor();
				System.out.println("");
			} catch (IOException | InterruptedException e) {
				e.printStackTrace();
			}
		}
	}

}
