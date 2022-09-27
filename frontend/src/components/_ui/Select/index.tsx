import { Select } from "@chakra-ui/react";


interface SelectProps {
    colorScheme: string,
    errorBorderColor: string,
    focusBorderColor: string,
    placeholder: string,
    size: string,
    variant: string,
    isDisabled: boolean,
    isInvalid: boolean,
    isRequired: boolean,
    isReadOnly: boolean,
    isFullWidth: boolean,
    isTruncated: boolean,
    isFocus: boolean,
    isHover: boolean,
    icon: React.ReactElement,
    iconColor: string,
}

export default function SelectComponents({
    colorScheme,
    errorBorderColor,
    focusBorderColor,
    placeholder,
    size,
    variant,
    isDisabled,
    isInvalid,
    isRequired,
    isReadOnly,
    icon,
    iconColor,
}: SelectProps) {
    return (
        <>
            <Select
                colorScheme={colorScheme}
                errorBorderColor={errorBorderColor}
                focusBorderColor={focusBorderColor}
                placeholder={placeholder}
                size={size}
                variant={variant}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                isRequired={isRequired}
                isReadOnly={isReadOnly}
                icon={icon}
                iconColor={iconColor}
            >
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
            </Select>
        </>
    );
}


