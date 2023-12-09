package Ejercicio5;

import java.io.IOException;
import java.lang.ProcessBuilder.Redirect;
import java.util.Scanner;

public class Main {
	public static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		System.out.println("Introduce el nombre del país: ");
		String pais = sc.nextLine();
		try {
			ProcessBuilder pb = new ProcessBuilder("java", "-cp", "src/Ejercicio5/json-20230618.jar",
					"src/Ejercicio5/DatosPais.java", pais);
			pb.redirectOutput(Redirect.INHERIT);
			pb.redirectInput(Redirect.INHERIT);
			Process pr = pb.start();
			pr.waitFor();
		} catch (IOException | InterruptedException e) {
			e.printStackTrace();
		}
	}
}
