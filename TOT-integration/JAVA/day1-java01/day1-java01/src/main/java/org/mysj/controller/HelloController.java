package org.mysj.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/helloworld")
    public String hello() {
        return "hello from Java 01";
    }
    @GetMapping("/helloworld2")
    public String hello2() {
        return "ready to implement...";
    }
}
