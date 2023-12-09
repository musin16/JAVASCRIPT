package Ejercicio3;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.lang.ProcessBuilder.Redirect;
import java.util.Scanner;

public class Main {
	public static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {

		System.out.println("Introduce el fichero para comprobar sus letras: ");
		String fichero = sc.nextLine();
		String[] vocales = { "a", "e", "i", "o", "u" };
		for (int i = 0; i < vocales.length; i++) {
			String[] comando = { "java", "src/Ejercicio3/Ejercicio3.java", fichero, vocales[i] };
			try {
				ProcessBuilder pb = new ProcessBuilder(comando);
				pb.redirectOutput(Redirect.INHERIT);
				pb.start();
			} catch (IOException e) {
				System.exit(-1);
				System.out.println("-1");
			}
		}

	}
}
