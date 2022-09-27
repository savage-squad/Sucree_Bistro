import { Button } from "@chakra-ui/react";

interface ButtonProps {
  onClick: (e: any) => void,
  title: string,
  isActive: boolean,
  isDisabled: boolean,
  isLoading: boolean,
  leftIcon: React.ReactElement,
  loadingText: string,
  rightIcon: React.ReactElement,
  size: "lg" | "md" | "sm" | "xs",
  spinner: React.ReactElement,
  spinnerPlacement: "end" | "start",
  variant: "ghost" | "outline" | "solid" | "link",
  colorScheme: string
  isAttached: boolean,
  spacing: '0.5rem'
}

export default function ButtonComponents({
  onClick,
  title,
  isActive,
  isDisabled,
  isLoading,
  leftIcon,
  loadingText,
  rightIcon,
  size,
  spinner,
  spinnerPlacement,
  variant,
  colorScheme,

}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      title={title}
      isActive={isActive}
      isDisabled={isDisabled}
      isLoading={isLoading}
      leftIcon={leftIcon}
      loadingText={loadingText}
      rightIcon={rightIcon}
      size={size}
      spinner={spinner}
      spinnerPlacement={spinnerPlacement}
      variant={variant}
      colorScheme={colorScheme}

    />

  );
}

