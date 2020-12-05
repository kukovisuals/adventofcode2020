import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.regex.*;

public class Main {
	public static void main(String[] args) throws Exception {		
	 	String data = fileAsString("../data/day4.txt");
		String[] rows = data.split("\n\r");

	}	
	// Reading a text file as a string
	public static String fileAsString(String fileName) throws Exception{
		String data = "";
		data = new String (Files.readAllBytes(Paths.get(fileName)));
		return data;
	}
}