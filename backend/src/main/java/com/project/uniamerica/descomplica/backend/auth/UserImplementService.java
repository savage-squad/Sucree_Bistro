package com.project.uniamerica.descomplica.backend.auth;

import com.project.uniamerica.descomplica.backend.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class UserImplementService {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<UserEntity>> index() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    public UserEntity findById(Long id){
        Optional<UserEntity> obj = this.userRepository.findById(id);
        return obj.orElse(null);
    }
    public UserEntity insert(UserEntity obj) {
        obj.setId(null);
        return this.userRepository.save(obj);
    }
    public UserEntity update(UserEntity obj) {
        if(this.findById((Long) obj.getId())== null){
            throw new ObjectNotFoundException("Object"+
                    UserEntity.class.getName()+"no found"+obj.getId());
        }
        return this.userRepository.save(obj);
    }
    public void deleteUser(Long id){
        if(this.findById(id) == null){
            throw new ObjectNotFoundException("Object" +UserEntity.class.getName()+"not found!" +id);
        }
        userRepository.deleteById(id);
    }

}
