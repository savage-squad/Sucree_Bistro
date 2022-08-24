package request;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/requests")
public class RequestResource {

    final RequestService requestService;

    @Autowired
    public RequestResource(RequestService requestService) {
        this.requestService = requestService;
    }

    @GetMapping()
    public ResponseEntity<List<RequestEntity>> getAllRequest() {
        return ResponseEntity.status(HttpStatus.OK).body(requestService.findAll());
    }

    @PostMapping
    public ResponseEntity<Object> saveRequest(@RequestBody @Valid RequestDto requestDto) {

        var requestEntity = new RequestEntity();
        BeanUtils.copyProperties(requestDto, requestEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(requestService.save(requestEntity));
    }



    @GetMapping("/{id}")
    public ResponseEntity<Object> getOnerequest(@PathVariable(value = "id") UUID id) {
        Optional<RequestEntity> requestEntityOptional = requestService.findById(id);
        if (!requestEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("request not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(requestEntityOptional.get());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleterequest(@PathVariable(value = "id") UUID id) {
        Optional<RequestEntity> requestEntityOptional = requestService.findById(id);
        if (!requestEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("request not found.");
        }
        requestService.delete(requestEntityOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("request deleted sucessfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updaterequest(@PathVariable(value = "id") UUID id,
                                              @RequestBody @Valid RequestDto requestDto) {
        Optional<RequestEntity> requestEntityOptional = requestService.findById(id);
        if (!requestEntityOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("request not found.");
        }
        var requestEntity = new RequestEntity();
        BeanUtils.copyProperties(requestDto, requestEntity);
        requestEntity.setId(requestEntityOptional.get().getId());
        return ResponseEntity.status(HttpStatus.OK).body(requestService.save(requestEntity));
    }


}