import { ReactNode } from 'react';
interface LinkProps {
    children: ReactNode;
    href: string;
    onClick?: () => void;
    disabled?: never;
}
interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean;
    href?: never;
}
export default function CTAButton({ children, disabled, href, onClick, }: LinkProps | ButtonProps): import("react").JSX.Element;
export {};
