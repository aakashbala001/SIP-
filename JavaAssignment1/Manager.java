class Employee {
    void work() {
        System.out.println("Employee is working");
    }
}

public class Manager extends Employee {
    void work() {
        super.work();  // Call Employee's work method
        System.out.println("Manager is managing");
    }

    public static void main(String[] args) {
        Manager m = new Manager();
        m.work();
    }
}
