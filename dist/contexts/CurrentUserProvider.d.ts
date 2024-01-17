import { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    unauthedChildren: ReactNode;
}
export default function CurrentUserProvider({ children, unauthedChildren, }: Props): import("react").JSX.Element;
export {};
