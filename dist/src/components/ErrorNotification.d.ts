/// <reference types="react" />
import { AuthError } from 'firebase/auth';
interface Props {
    error: AuthError;
}
export default function ErrorNotification({ error }: Props): import("react").JSX.Element;
export {};
