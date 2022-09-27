import { Heading } from "@chakra-ui/react";


interface CardProps {
    title: string,
    description: string,
    image: string,
    link: string,
    configure: boolean,
    configureLink: string,

}

export default function CardComponents({ title, description, image, configure, configureLink}: CardProps) {
    return (
        <Heading
            title={title}
            // description={description}
            // image={image}
            // configure={configure}
            // configureLink={configureLink}
        />
    );
}
   
