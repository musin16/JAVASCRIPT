package Ejercicio2;

import java.io.IOException;
import java.lang.ProcessBuilder.Redirect;

public class Main {

	public static void main(String[] args) {
		String[] comando = { "java", "src/Ejercicio2/Ejercicio2.java", "24" };
		try {
			ProcessBuilder pb = new ProcessBuilder(comando);
			pb.redirectOutput(Redirect.INHERIT);
			pb.start();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
