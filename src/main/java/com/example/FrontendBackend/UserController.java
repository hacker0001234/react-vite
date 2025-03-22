package com.example.FrontendBackend;

import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> allUsers(){
    return userService.getAllUsers();
}
@PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestBody User user){
        userService.createUser(user);
        return ResponseEntity.ok("Added!");
}
@DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    return ResponseEntity.ok("deleted!");
}
}
