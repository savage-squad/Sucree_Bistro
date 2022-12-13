import { Button, ButtonProps } from "@chakra-ui/react";


interface ButtonPropsComponent extends ButtonProps {

  onClick: (e: any) => void,
}

export default function ButtonComponents({
  value,
  ...rest


}: ButtonPropsComponent) {
  return (
    <>
      <Button
        value={value}

        {...rest}
      />

    </>

  );
}