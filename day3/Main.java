import java.io.*;
import java.nio.file.*;
import java.util.*;

public class Main {
	public static void main(String[] args) throws Exception {		
		int right = 3;
		int output = 0;
		char[] ch; 
		int len;

		String data = fileAsString("../data/day3.txt");
		String[] rows = data.split("\n");
		// the text is divided into 11 elements
		// now we have to go -> +3 on each iteration replace  
		// the char for O if == . or X if == #
		// char ch = "";
		for (int i=1; i<rows.length; i++) {
			len = rows[0].length();
			ch = new char[rows.length];
			if (right == len-1) {
				right = 0;	
			} else if (right == len) {
				right = 1; 
			} else if(right == len+1){
				right = 2;
			}
			ch[i] = rows[i].charAt(right);
			if (ch[i] == '#') {
				output ++;
			} 
			// System.out.println(ch[i] + ", "+ right+" size: "+len);
			right += 3;	
		}
		System.out.println(output);
		
	}	
		// Reading a text file as a string
	public static String fileAsString(String fileName) throws Exception{
		String data = "";
		data = new String (Files.readAllBytes(Paths.get(fileName)));
		return data;
	}
}