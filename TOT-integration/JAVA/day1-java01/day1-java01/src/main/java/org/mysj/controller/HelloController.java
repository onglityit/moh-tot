package org.mysj.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class HelloController {
    @GetMapping("/helloworld")
    public String hello() {
        return "hello from Java 01";
    }
//    @GetMapping("/helloworld2")
//    public String hello2() {
//        return "ready to implement...";
//    }
    @GetMapping("/helloworld2-solution")
    public String hello2() throws IOException {
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        Request request = new Request.Builder()
                .url("http://localhost:8082/day1-java02/helloworld")
                .method("GET", null)
                .build();
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                return response.body().string();
            } else {
                return "Error: " + response.code();
            }
        }
    }
    @GetMapping("/hellonode")
    public String hellonode() {return "ready to be lingua franca of programming...";}
}
