package com.dev.acad.devacad;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class DevacadApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevacadApplication.class, args);
	}

	@RequestMapping("/")
	public String renderWelcomePage(Model model) {
		return "<h1>Hello this is the backend.</h1>";
	}
}
