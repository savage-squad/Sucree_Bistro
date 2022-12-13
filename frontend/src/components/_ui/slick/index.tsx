import { Slider } from "@chakra-ui/react";

interface Slider extends React.Component<Slider> {
    value: number;
    dots: boolean;
    infinite: boolean;
    slidesToShow: number,
    slidesToScroll: number,
    autoplay: boolean,
    speed: number,
    autoplaySpeed: number,
    cssEase: string,
}

export default function SlickComponents({
    value
}: Slider) {
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
            <Slider {...settings}
                value={value}         
            >
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}