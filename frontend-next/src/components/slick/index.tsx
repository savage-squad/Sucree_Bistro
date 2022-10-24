import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {

    property = {
        imageUrl: 'https://i.pinimg.com/736x/45/fb/18/45fb1836a16b92562589bb9ccabfb90c.jpg',
    }
    bebidas = {
        imageUrl: 'https://i.pinimg.com/736x/45/fb/18/45fb1836a16b92562589bb9ccabfb90c.jpg',
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <h2>Auto Play</h2>
                <Slider {...settings}>
                    <div>
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Image src={this.property.imageUrl} />

                            <Box p='6'>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                                        Entrada
                                    </Badge>

                                </Box>

                            </Box>
                        </Box>

                    </div>
                    <div>
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Image src={this.bebidas.imageUrl} />

                            <Box p='6'>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                                        Entrada
                                    </Badge>

                                </Box>

                            </Box>
                        </Box>
                    </div>
                    <div>
                        <h3>Produtos</h3>
                    </div>
                    <div>
                        <h3>Comanda</h3>
                    </div>
                    <div>
                        <h3>Categorias</h3>
                    </div>
                    <div>
                        <h3>Bebidas</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}