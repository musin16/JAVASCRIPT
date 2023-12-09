package Ejercicio4;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class MainTransformado {
	public static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		System.out.println("Introduce el fichero: ");
		String fichero = sc.nextLine();
		String[] comando = { "java", "src/Ejercicio4/Ejercicio4.java", "0" };
		try {
			ProcessBuilder pb = new ProcessBuilder(comando);
			pb.redirectInput(new File(fichero));
			pb.redirectOutput(new File("Palindromo.txt"));
			pb.start();
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}
}
