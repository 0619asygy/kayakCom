package com.kayak.utilities;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
    //This class will be responsible for loading properties file and will provide access to
    //values based on key name
    private static Properties configFile;

    static  {
        try {
            //provides access to file.
            //try&catch block stands for handling exceptions.
            //if exception accours, code inside a catch block will be executed.
            FileInputStream fileInputStream = new FileInputStream("configuration.properties");

            configFile = new Properties();
            configFile.load(fileInputStream);
        } catch (IOException e) {
            System.out.println("Properties file is not loaded :(");
            e.printStackTrace();
        }
    }

    public static String getProperty(String key){
        return configFile.getProperty(key);
    }

}
