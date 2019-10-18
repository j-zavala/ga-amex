package com.example.usersapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
public class UserApiApplication {

	@RequestMapping("/")
	public String home() {
		return "Some Users";
	}
	public static void main(String[] args) {
		SpringApplication.run(UserApiApplication.class, args);
	}

}
