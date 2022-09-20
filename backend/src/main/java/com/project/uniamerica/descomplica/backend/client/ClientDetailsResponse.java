package com.project.uniamerica.descomplica.backend.client;

import com.project.uniamerica.descomplica.backend.address.AddressDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ClientDetailsResponse extends ClientResponse {

    private List<AddressDto> address;

//    public ClientDetailsResponse(ClientEntity client) {
//        super(client);
//        this.address =client.getAddress().stream().map(AddressDto::new).collect(Collectors.toList());
//    }

}