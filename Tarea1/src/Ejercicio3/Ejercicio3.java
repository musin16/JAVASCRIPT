package Ejercicio3;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class Ejercicio3 {
	public static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		try {
			if (args.length < 2) {
				salidaErro();

			}
			FileReader leer = new FileReader(new File(args[0]));
			int letr = 0, cont = 0;
			while ((letr = leer.read()) != -1) {
				if ((char) args[1].toLowerCase().charAt(0) == Character.toString((char) letr).toLowerCase().charAt(0)) {
					cont++;
				}
			}
			System.out.println("En total hay de la letra: " + args[1].charAt(0) + " la cantidad de : " + cont);
			System.out.println("Codigo de salida: 0");
			System.exit(0);
		} catch (IOException e) {
			salidaErro();
		}
	}

	private static void salidaErro() {
		System.out.println("Codigo de salida: -1");
		System.exit(-1);
	}
}
