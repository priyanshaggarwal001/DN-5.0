class Computer{
    private String cpu;
    private String ram;
    private String storage; 

    public Computer(String cpu, String ram, String storage){
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
    }
    public void show(){
        System.out.println("CPU: " + cpu);
        System.out.println("RAM: " + ram);
        System.out.println("Storage: " + storage);
    }
    

    static class Builder{
        private String cpu;
        private String ram;
        private String storage;

        public Builder setCpu(String cpu){
            this.cpu = cpu;
            return this;
        }

        public Builder setRam(String ram){
            this.ram = ram;
            return this;
        }

        public Builder setStorage(String storage){
            this.storage = storage;
            return this;
        }

        public Computer build(){
            return new Computer(this.cpu, this.ram, this.storage);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Computer computer = new Computer.Builder()
                                .setCpu("Intel i7")
                                .setRam("16GB")
                                .setStorage("512GB SSD")
                                .build();
        computer.show();
    }
}