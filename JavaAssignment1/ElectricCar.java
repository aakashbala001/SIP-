class Vehicle {
    void showVehicle() {
        System.out.println("This is a Vehicle");
    }
}

class Car extends Vehicle {
    void showCar() {
        System.out.println("This is a Car");
    }
}

public class ElectricCar extends Car {
    void showElectricCar() {
        System.out.println("This is an Electric Car");
    }

    public static void main(String[] args) {
        ElectricCar ec = new ElectricCar();
        ec.showVehicle();       
        ec.showCar();           
        ec.showElectricCar();   
    }
}
