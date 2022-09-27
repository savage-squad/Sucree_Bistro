import { Input } from '@chakra-ui/react'

interface InputProps {
    label: string;
    placeholder: string;
    value: any;
    defaultValue: string;
    onChange: (e: any) => void;
    required: boolean;
    secure: boolean;
    autoFocus: boolean;
    autoComplete: string;
    type: string;

}

export default function InputComponents({
    value,
    placeholder,
    onChange,
    required,
    autoFocus,
    autoComplete,
    type

}: InputProps) {

    return (
        <Input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            type={type}
          
        />
    );
}