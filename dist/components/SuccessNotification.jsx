import { CheckCircleIcon } from '@heroicons/react/24/solid';
export default function SuccessNotification(_a) {
    var message = _a.message;
    return (<div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true"/>
        </div>
        <div className="ml-2">
          <p className="text-sm font-medium text-green-700">{message}</p>
        </div>
      </div>
    </div>);
}
