package Ejercicio3Monitores;

public class Consumidor implements Runnable {
    public Cinta cinta;
    public String nom;
    public Productor pr;

    public Consumidor(Cinta c, String nom) {
        this.cinta = c;
        this.nom = nom;
        pr = new Productor(c);
    }

    @Override
    public void run() {
        while (true) {
            synchronized(cinta) {
                while (Cinta.cont == 0) {
                    try {
                        cinta.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                System.out.println("Se ha consumido " + Cinta.cont);
                Cinta.cont--; 
                cinta.notifyAll();
            }
        }
    }
}
