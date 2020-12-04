import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.regex.*;

public class Main {
	public static void main(String[] args) throws Exception {		
		int output = 0;
		int ehh = 0;
		String data = fileAsString("../data/day4.txt");
		String[] rows = data.split("\n\r");

		String[] fields = {"byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"}; 
		int ln = rows.length;
		Map<String, Boolean> hm = new HashMap<String, Boolean>(ln-1); 
  	
  	String[] dataArr;
  		// iterate through each of the fileds
  	String[] regx;
  	for (int i = 0; i < rows.length; ++i) {
	  	regx = new String[rows.length];
  		for (int j = 0; j < fields.length; ++j) {
		  	regx[i] = rows[i].replaceAll("[:]", ",");
		  	dataArr = regx[i].split(",");
		  	// we just have to check if the fileds are there
				Pattern pat = Pattern.compile(fields[j]);
  			Matcher found = pat.matcher(rows[i]);
  			if (found.find() || fields[j] == "cid") {
			    hm.put(fields[j], new Boolean(true)); 
		  	} else {
			    hm.put(fields[j], new Boolean(false)); 
		  	}	  	
  		}
  		// check them fields
  		for (String o : hm.keySet()) {
  			// if (o == "cid") { hm.put("cid", new Boolean(true)); }
  			if ((i == i) && (hm.get(o) == false)) {
  				++output;
  				break;
  			}
  			System.out.println(o+":"+hm.get(o));
  		}
  		System.out.println( (rows.length)-output); 
  	}
	}	
	// Reading a text file as a string
	public static String fileAsString(String fileName) throws Exception{
		String data = "";
		data = new String (Files.readAllBytes(Paths.get(fileName)));
		return data;
	}
}