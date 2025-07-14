public class VariableTypes {
    int instanceVar = 100;              
    static int staticVar = 200;       

    void showVariables() {
        int localVar = 50;             
        System.out.println("Local Variable: " + localVar);
        System.out.println("Instance Variable: " + instanceVar);
        System.out.println("Static Variable: " + staticVar);
    }

    public static void main(String[] args) {
        VariableTypes obj = new VariableTypes();
        obj.showVariables();
    }
}
