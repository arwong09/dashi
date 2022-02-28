import NextImage from 'next/image'
import Link from 'next/link'
import LoadingSpinner from './LoadingSpinner'
import ErrorNotification from './ErrorNotification'
import useResetPassword from '../hooks/useResetPassword'
import SuccessNotification from './SuccessNotification'

const ResetPassword = () => {
  const {
    onEmailChange, emailValue, onSubmit, isLoading, error, successMessage,
  } = useResetPassword()

  return (
    <div className="min-h-full flex flex-col justify-center pb-32 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="w-12 h-12 relative ml-2">
          <NextImage
            layout="fill"
            className="mx-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-700">Reset your password</h2>
          <p className="text-sm mb-6 text-gray-600">Enter the email address associated with your account and we&apos;ll send you a link to reset your password</p>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  onChange={onEmailChange}
                  value={emailValue}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
              >
                {isLoading ? <LoadingSpinner /> : 'Reset password'}
              </button>
              <div className="mt-6 ml-2 text-sm flex justify-center w-full text-gray-700">
                <Link href="signup"><a className="text-indigo-600 hover:text-indigo-500">Return to sign in</a></Link>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-6">
          {error && <ErrorNotification error={error} />}
          {successMessage && <SuccessNotification message={successMessage} />}
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
