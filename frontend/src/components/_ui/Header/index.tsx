import { Heading, HeadingProps } from "@chakra-ui/react";

interface HeaderProps extends HeadingProps {
    title: string;

}
export default function HeadingComponents({
    title,
    ...rest

}: HeaderProps) {
    return (
        <>
            <Heading
                title={title}
                {...rest}
            />

        </>

    );

}