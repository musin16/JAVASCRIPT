package Ejercicio4;

import java.io.IOException;
import java.lang.ProcessBuilder.Redirect;
import java.util.Scanner;

public class Main {
	public static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		String[] comando = { "java", "src/Ejercicio4/Ejercicio4.java" };
		try {
			ProcessBuilder pb = new ProcessBuilder(comando);
			pb.redirectOutput(Redirect.INHERIT);
			pb.redirectInput(Redirect.INHERIT);
			Process p = pb.start();
			p.waitFor();
		} catch (IOException | InterruptedException e) {
			System.out.println(e.getMessage());
		}
	}
}
