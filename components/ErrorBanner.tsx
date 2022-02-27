import { XCircleIcon } from '@heroicons/react/solid'
import { AuthError } from 'firebase/auth'

interface Props {
    error: AuthError
}

const ERROR_CODE_MAPPING: { [key: string]: string } = {
  'auth/email-already-in-use': 'That email is already in use. Please try again with a different email.',
}

const getErrorMessage = (code: string) => {
  const message = ERROR_CODE_MAPPING[code]
  return message ?? 'An error ocurred. Please try again.'
}

export default function ErrorBanner({ error }: Props) {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{getErrorMessage(error.code)}</h3>
          {/* <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc pl-5 space-y-1">
              <li>{ERROR_CODE_MAPPING[error.code]}</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}
