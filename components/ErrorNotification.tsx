import { XCircleIcon } from '@heroicons/react/solid'
import { AuthError } from 'firebase/auth'

interface Props {
    error: AuthError
}

const ERROR_CODE_MAPPING: { [key: string]: string } = {
  'auth/email-already-in-use': 'That email is already in use',
  'auth/missing-email': 'Please enter an email address',
  'auth/weak-password': 'Your password must be at least 6 characters',
}

const getErrorMessage = (error: AuthError) => {
  const message = ERROR_CODE_MAPPING[error.code]
  return message ?? error.code ?? 'An error ocurred. Please try again.'
}

export default function ErrorNotification({ error }: Props) {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{getErrorMessage(error)}</h3>
        </div>
      </div>
    </div>
  )
}
