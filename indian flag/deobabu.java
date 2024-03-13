public class deobabu{
    public static void main(String[] args) {
        StringBuilder sb= new StringBuilder("Tony");
        System.out.println(sb);
        System.out.println(sb.charAt(0));
        sb.setCharAt(0, 'p');
        System.out.println(sb);
        sb.insert(0,'p');
        sb.delete(2,3);
        System.out.println(sb);
        sb.append("H");
        sb.append("e");
        System.out.println(sb);

    }
}
