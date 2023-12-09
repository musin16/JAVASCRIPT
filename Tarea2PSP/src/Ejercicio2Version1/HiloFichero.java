package Ejercicio2Version1;

import java.io.BufferedReader;
import java.io.EOFException;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class HiloFichero implements Runnable {
	private int cantidadCaracteres;
	private int cantidadPalabras;
	private String[] ficheros;
	public static int totalLetras = 0;
	public static int totalPalabras = 0;

	public HiloFichero() {

	}

	public HiloFichero(String[] ficheros) {
		this.ficheros=ficheros;
	}

	public int getCantidadCaracteres() {
		return cantidadCaracteres;
	}

	public void setCantidadCaracteres(int cantidadCaracteres) {
		this.cantidadCaracteres = cantidadCaracteres;
	}

	public int getCantidadPalabras() {
		return cantidadPalabras;
	}

	public void setCantidadPalabras(int cantidadPalabras) {
		this.cantidadPalabras = cantidadPalabras;
	}

	public String[] getFicheros() {
		return ficheros;
	}

	public void setFicheros(String[] ficheros) {
		this.ficheros = ficheros;
	}

	@Override
	public void run() {
		BufferedReader br = null;
		try {
			for (int i = 0; i < ficheros.length; i++) {
				HiloFichero pL = new HiloFichero();
				br = new BufferedReader(new FileReader(ficheros[i]));
				String linea = "";
				while ((linea = br.readLine()) != null) {
					String[] palabras = linea.split(" ");
					pL.setCantidadCaracteres(pL.getCantidadCaracteres() + linea.length());
					pL.setCantidadPalabras(pL.getCantidadPalabras() + palabras.length);
					HiloFichero.totalPalabras += palabras.length;
					HiloFichero.totalLetras += linea.length();
				}
				System.out
						.println("El fichero " + ficheros[i] + " tiene " + pL.getCantidadCaracteres() + " caracteres ");
				System.out.println("El fichero " + ficheros[i] + " tiene " + pL.getCantidadPalabras() + " palabras ");
			}
			System.out.println("Los fichero en total tienen " + HiloFichero.totalLetras + " caracteres y "
					+ HiloFichero.totalPalabras + " palabras");
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			System.out.println("Fichero no existe");
		} catch (IOException e) {
			// TODO: handle exception
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}

}
