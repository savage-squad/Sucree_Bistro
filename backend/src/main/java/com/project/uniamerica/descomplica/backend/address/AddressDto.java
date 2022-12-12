package com.project.uniamerica.descomplica.backend.address;

import com.project.uniamerica.descomplica.backend.address.entity.CityEntity;
import com.project.uniamerica.descomplica.backend.address.entity.StateEntity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressDto {
    private Long id;
    private Long number;
    private String zipCode;
    private AddressType type;
    private String district;
    private String publicPlace;
    private String complement;
    private String viacepUrl;
    private CityEntity city;
    private StateEntity state;
    private Long clientId;

    public AddressDto(AddressEntity address) {
        this.id = address.getId();
        //this.number = address.getNumber();
        this.zipCode = address.getZipCode();
        this.type = address.getType();
        this.district = address.getDistrict();
        this.publicPlace = address.getPublicPlace();
        this.complement = address.getComplement();
        this.viacepUrl = address.getViacepUrl();
        this.city = address.getCity();
        this.state = address.getCity().getState();
        this.clientId = address.getClient().getId();
    }

}