/// <reference types="react" />
import { User as FirebaseUser } from 'firebase/auth';
import { User } from '@/utils/types';
interface CurrentUserContextInterface {
    currentUser: FirebaseUser | null | undefined;
    user: User | null | undefined;
}
declare const CurrentUserContext: import("react").Context<CurrentUserContextInterface>;
export default CurrentUserContext;
