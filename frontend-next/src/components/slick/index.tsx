import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {

     property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <h2>Auto Play</h2>
                <Slider {...settings}>
                    <div>
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Image src={this.property.imageUrl} alt={this.property.imageAlt} />

                            <Box p='6'>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                                        New
                                    </Badge>
                                    <Box
                                        color='gray.500'
                                        fontWeight='semibold'
                                        letterSpacing='wide'
                                        fontSize='xs'
                                        textTransform='uppercase'
                                        ml='2'
                                    >
                                        {this.property.beds} beds &bull; {this.property.baths} baths
                                    </Box>
                                </Box>

                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    {this.property.title}
                                </Box>

                                <Box>
                                    {this.property.formattedPrice}
                                    <Box as='span' color='gray.600' fontSize='sm'>
                                        / wk
                                    </Box>
                                </Box>

                                <Box display='flex' mt='2' alignItems='center'>
                                    {Array(5)
                                        .fill('')
                                        .map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                color={i < this.property.rating ? 'teal.500' : 'gray.300'}
                                            />
                                        ))}
                                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                        {this.property.reviewCount} reviews
                                    </Box>
                                </Box>      </Box>
                        </Box>

                    </div>
                    <div>
                        <h3>Mesas</h3>
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