package org.mysj.controller;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class HelloControllerSolution {
//    @GetMapping("/helloworld-solution")
//    public String hello() {
//        return "hello from Java 01";
//    }
//    @GetMapping("/helloworld2-solution")
//    public String hello2() throws IOException {
//        OkHttpClient client = new OkHttpClient().newBuilder()
//                .build();
//        Request request = new Request.Builder()
//                .url("http://localhost:8082/day1-java02/helloworld")
//                .method("GET", null)
//                .build();
//        try (Response response = client.newCall(request).execute()) {
//            if (response.isSuccessful()) {
//                return response.body().string();
//            } else {
//                return "Error: " + response.code();
//            }
//        }
//    }

    @GetMapping("/hellonode-solution")
    public String hellonode() throws IOException {
        OkHttpClient client = new OkHttpClient().newBuilder().build();
        Request request = new Request.Builder()
                .url("http://localhost:3001/helloworld")
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
}
