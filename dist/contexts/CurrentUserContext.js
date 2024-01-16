import { createContext } from 'react';
var CurrentUserContext = createContext({
    currentUser: undefined,
    user: undefined,
});
CurrentUserContext.displayName = 'CurrentUserContext';
export default CurrentUserContext;
