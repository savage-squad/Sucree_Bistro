import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; // Add this line

export default class AutoPlay extends Component {

    property = {
        imageUrl: 'https://classic.exame.com/wp-content/uploads/2021/06/cerveja-gelada-e1598542702646-1.jpg?quality=70&strip=info&w=680',
    }
    bebidas = {
        imageUrl: 'https://s2.glbimg.com/3CtrEoDp2XZbALHenH_5JfBuRLk=/940x523/e.glbimg.com/og/ed/f/original/2018/06/20/beverages-cold-colorful-1154756.jpg',
    }
    produtos = {
        imageUrl: 'https://ingenieriademenu.com/wp-content/uploads/2020/06/dise%C3%B1o-de-menus.jpg',
    }
    comanda = {
        imageUrl: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/257215-cardapio-eletronico-vale-a-pena-implementar-no-seu-restaurante.jpg',
    }
    categorias = {
        imageUrl: 'https://respostas.sebrae.com.br/wp-content/uploads/2021/01/card%C3%A1pio-.jpg',
    }

    mesas = {
        imageUrl: 'https://diaonline.ig.com.br/wp-content/uploads/2018/10/conheca-22-charmosos-restaurantes-em-goiania.jpg',
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
            <div style={{ marginTop: 100 }}>
                <Slider {...settings}>
                    <div>
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Image src={this.property.imageUrl} />

                            <Box p='6'>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius={2} px='2' bg='#E8E8E8'>
                                        Bedidas
                                    </Badge>

                                </Box>

                            </Box>
                        </Box>

                    </div>

                    <div>
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Image src={this.produtos.imageUrl} />

                            <Box p='6'>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius={2} px='2' bg='#E8E8E8'>
                                        Produtos
                                    </Badge>

                                </Box>

                            </Box>
                        </Box>
                    </div>
                    <div>
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Image src={this.comanda.imageUrl} />

                            <Box p='6'>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius={2} px='2' bg='#E8E8E8'>
                                        Comanda
                                    </Badge>

                                </Box>

                            </Box>
                        </Box>
                    </div>
                    <div>
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Image src={this.categorias.imageUrl} />

                            <Box p='6'>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius={2} px='2' bg='#E8E8E8'>
                                        Categorias
                                    </Badge>

                                </Box>

                            </Box>
                        </Box>
                    </div>
                    <div>
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Image src={this.mesas.imageUrl} />

                            <Box p='6'>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius={2} px='2' bg='#E8E8E8'>
                                        Mesas
                                    </Badge>

                                </Box>

                            </Box>
                        </Box>
                    </div>
                </Slider>
            </div>
        );
    }
}