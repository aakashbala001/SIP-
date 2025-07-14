public class ExecutionOrder {
    static {
        System.out.println("Static block executed");
    }

    {
        System.out.println("Instance block executed");
    }

    ExecutionOrder() {
        System.out.println("Constructor executed");
    }

    public static void main(String[] args) {
        ExecutionOrder obj1 = new ExecutionOrder();
        ExecutionOrder obj2 = new ExecutionOrder();
        System.out.println(obj1);
        System.out.println(obj2);
    }
}
