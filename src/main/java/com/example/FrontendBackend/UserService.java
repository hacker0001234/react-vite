package com.example.FrontendBackend;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void createUser(User user){
    userRepository.save(user);
}
public List<User> getAllUsers(){
        return userRepository.findAll();
}

public void deleteUser(Long id){
    userRepository.deleteById(id);
}
}
