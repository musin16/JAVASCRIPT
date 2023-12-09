package Ejercicio2Version2;

import java.io.BufferedReader;
import java.io.EOFException;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MultiHiloFichero implements Runnable {
	private int cantidadCaracteres;
	private int cantidadPalabras;
	private String ficheros;
	public static int totalLetras = 0;
	public static int totalPalabras = 0;

	public MultiHiloFichero() {

	}

	public MultiHiloFichero(String ficheros) {
		this.ficheros = ficheros;
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

	public String getFicheros() {
		return ficheros;
	}

	public void setFicheros(String ficheros) {
		this.ficheros = ficheros;
	}

	@Override
	public void run() {
		try (BufferedReader br = new BufferedReader(new FileReader(ficheros))){
			MultiHiloFichero pL = new MultiHiloFichero();
			String linea = "";
			while ((linea = br.readLine()) != null) {
				String[] palabras = linea.split(" ");
				pL.setCantidadCaracteres(pL.getCantidadCaracteres() + linea.length());
				pL.setCantidadPalabras(pL.getCantidadPalabras() + palabras.length);
				MultiHiloFichero.totalPalabras += palabras.length;
				MultiHiloFichero.totalLetras += linea.length();
			}
			System.out.println("El fichero " + ficheros + " tiene " + pL.getCantidadCaracteres() + " caracteres ");
			System.out.println("El fichero " + ficheros + " tiene " + pL.getCantidadPalabras() + " palabras ");
		} catch (FileNotFoundException e) {
			System.out.println("Fichero no existe");
		} catch (IOException e) {
			// TODO: handle exception
		}
	}
}
