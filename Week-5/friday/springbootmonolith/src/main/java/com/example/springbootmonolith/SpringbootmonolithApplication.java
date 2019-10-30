package com.example.springbootmonolith;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@SpringBootApplication
@ComponentScan
public class SpringbootmonolithApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootmonolithApplication.class, args);
	}

}
