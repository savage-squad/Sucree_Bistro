import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMathExactHref?: boolean;

}

export function ActiveLink({ children, shouldMathExactHref, ...rest }: ActiveLinkProps) {

    const { asPath } = useRouter()

    let isActive = false;

    if (shouldMathExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }
    if (!shouldMathExactHref &&
        (asPath.startsWith(String(rest.href)) ||
            asPath.startsWith(String(rest.as)))) {
        isActive = true;
    }
    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'cyan.500' : 'gray.900'
            })}
        </Link>
    );
}