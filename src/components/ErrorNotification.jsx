import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
var ERROR_CODE_MAPPING = {
    'auth/email-already-in-use': 'That email is already in use',
    'auth/missing-email': 'Please enter an email address',
    'auth/weak-password': 'Your password must be at least 6 characters',
    'auth/wrong-password': 'Incorrect email or password',
    'auth/user-not-found': 'Incorrect email or password',
};
var getErrorMessage = function (error) {
    var _a;
    var message = ERROR_CODE_MAPPING[error.code];
    return (_a = message !== null && message !== void 0 ? message : error.code) !== null && _a !== void 0 ? _a : 'An error ocurred. Please try again.';
};
export default function ErrorNotification(_a) {
    var error = _a.error;
    return (<div className="rounded-md pt-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="h-5 w-5 text-red-500" aria-hidden="true"/>
        </div>
        <div className="ml-1.5">
          <h3 className="text-sm text-red-500">{getErrorMessage(error)}</h3>
        </div>
      </div>
    </div>);
}
