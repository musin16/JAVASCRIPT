package Ejercicio3Monitores;

public class Productor implements Runnable {
    Cinta c;

    public Productor(Cinta c) {
        this.c = c;
    }

    @Override
    public void run() {
        while (true) {
            synchronized(c) {
                while (Cinta.cont == 10) {
                    try {
                        c.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                Cinta.cont++;
                System.out.println("Se ha producido correctamente: " + Cinta.cont);
                c.notifyAll();
            }
        }
    }
}
