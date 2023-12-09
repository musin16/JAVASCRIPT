package Ejercicio4Caballos;

import java.util.Scanner;

public class Main {
//	Ejercicio 4: Diseña un programa que simule una carrera de caballos. 
//  Cada caballo estará representado por un hilo y
//	debe avanzar un número de metros en cada iteración. 
//  Cada vez que hagamos una carrera tenemos que simular el
//	número de caballos que participarán y la distancia.
//	El interfaz de usuario debe ser algo parecido al siguiente, 
//  o invéntate otro alternativo:
	public static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		System.out.println("Introduce el numero de caballos: ");
		int numCab = sc.nextInt();
		sc.nextLine();
		System.out.println("Introduce la distancia: ");
		int distancia = sc.nextInt();
		sc.nextLine();
		for (int i = 0; i < numCab; i++) {
			Thread t = new Thread(new Caballos(distancia, 0, "Caballo " + (i + 1)));
			t.start();
		}
	}
}
