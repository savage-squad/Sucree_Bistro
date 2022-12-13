import { Input, InputProps } from '@chakra-ui/react'


export default function InputComponents({
    value,
    onChange,

    ...rest
}: InputProps) {

    return (
        <Input
            value={value}
            onChange={onChange}
            {...rest}
        />
    );
}