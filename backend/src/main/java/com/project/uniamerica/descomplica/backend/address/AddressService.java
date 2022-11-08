package com.project.uniamerica.descomplica.backend.address;


import com.project.uniamerica.descomplica.backend.client.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AddressService {
    private final ClientService clientService;
    private final AddressService addressService;

}