import {
    AspectRatio,
    Box,
    BoxProps,
    Container,
    forwardRef,
    Heading,
    Input,
    Stack,
    Text
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

const first = {
    rest: {
        rotate: "-15deg",
        scale: 0.95,
        x: "-50%",
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        x: "-70%",
        scale: 1.1,
        rotate: "-20deg",
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};

const second = {
    rest: {
        rotate: "15deg",
        scale: 0.95,
        x: "50%",
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        x: "70%",
        scale: 1.1,
        rotate: "20deg",
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};

const third = {
    rest: {
        scale: 1.1,
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        scale: 1.3,
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};

const PreviewImage = forwardRef<BoxProps, typeof Box>((props, ref) => {
    return (
        <Box
            bg="white"
            top="0"
            height="100%"
            width="100%"
            position="absolute"
            borderWidth="1px"
            borderStyle="solid"
            rounded="sm"
            borderColor="gray.400"
            as={motion.div}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
            {...props}
            ref={ref}
        />
    );
});

export default function SelectFileComponents() {
    const controls = useAnimation();
    const startAnimation = () => controls.start("hover");
    const stopAnimation = () => controls.stop();
    return (
        <Container my="12" width="100%">
            <AspectRatio width="100%" ratio={16 / 9}>
                <Box
                    borderColor="gray.300"
                    borderStyle="dashed"
                    borderWidth="2px"
                    rounded="md"
                    shadow="sm"
                    role="group"
                    transition="all 150ms ease-in-out"
                    _hover={{
                        shadow: "md"
                    }}
                    as={motion.div}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                >
                    <Box position="relative" height="100%" width="100%">
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            height="100%"
                            width="100%"
                            display="flex"
                            flexDirection="column"
                        >
                            <Stack
                                height="100%"
                                width="100%"
                                display="flex"
                                alignItems="center"
                                justify="center"
                                spacing="4"
                            >
                                <Box height="16" width="12" position="relative">
                                    <PreviewImage
                                        variants={first}
                                        backgroundImage="url('https://i.pinimg.com/564x/ee/2a/10/ee2a10b86595aef28cfcbe3e728df965.jpg')"
                                    />
                                    <PreviewImage
                                        variants={second}
                                        backgroundImage="url('https://i.pinimg.com/564x/a3/38/d0/a338d02b260a5f4ec98a4108e4dc19e8.jpg')"
                                    />
                                    <PreviewImage
                                        variants={third}
                                        backgroundImage={`url("https://i.pinimg.com/564x/b0/87/d5/b087d596dded728b859484a4d9be4d79.jpg")`}
                                    />
                                </Box>
                                <Stack p="8" textAlign="center" spacing="1">
                                    <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                                        Adicione o produto
                                    </Heading>
                                    <Text fontWeight="light">o haga clic para cargar</Text>
                                </Stack>
                            </Stack>
                        </Box>
                        <Input
                            type="file"
                            height="100%"
                            width="100%"
                            position="absolute"
                            top="0"
                            left="0"
                            opacity="0"
                            aria-hidden="true"
                            accept="image/*"
                            onDragEnter={startAnimation}
                            onDragLeave={stopAnimation}
                        />
                    </Box>
                </Box>
            </AspectRatio>
        </Container>
    );
}