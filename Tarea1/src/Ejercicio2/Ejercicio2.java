package Ejercicio2;

public class Ejercicio2 {
	public static void main(String[] args) {
		int numArg = args.length;
		int[] conNum = new int[numArg];
		int[] conNeg = new int[numArg];
		if (!(args.length >= 1)) {
			System.out.print(1);
			System.exit(1);
		}
		for (int i = 0; i < args.length; i++) {
			for (int j = 0; j < args[i].length(); j++) {
				char carcter = args[i].charAt(j);
				if (Character.isDigit(carcter)) {
					conNum[i]++;
				} else {
					if (i == 0) {
						if (carcter == '-') {
							conNeg[i]++;
						}
					}
				}
			}
		}
		int contNegativo = 0;
		int contPositivo = 0;
		for (int j = 0; j < args.length; j++) {
			if (conNeg[j] == 1) {
				contNegativo++;
			} else {
				if (args[j].length() == conNum[j]) {
					contPositivo++;
				} else {
					System.out.print(2);
					System.exit(2);
				}
			}
		}
		if (contNegativo == numArg) {
			System.out.print(3);
			System.exit(3);
		} else if (contPositivo == numArg) {
			System.out.print(0);
			System.exit(0);
		}
	}
}