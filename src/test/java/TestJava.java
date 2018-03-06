/**
 * @author xuhaihong
 * @create 2018-02-27 10:57
 **/
public class TestJava {

    public static void main(String[] args) {
        TestJava testJava = new TestJava();
       TestJava.A a =  testJava.new A();
    }

    class A {
        String s;
    }
}

class B{

    public static void main(String[] args) {

        TestJava a = new  TestJava();
        TestJava.A a1 = a.new A();
    }

}

