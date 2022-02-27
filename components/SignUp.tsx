import NextImage from 'next/image'
import useSignup from '../hooks/useSignup'
import LoadingSpinner from './LoadingSpinner'
import ErrorBanner from './ErrorBanner'

export default function SignUp() {
  const {
    onEmailChange, emailValue, onPasswordChange, passwordValue, onSubmit, isLoading, error,
  } = useSignup()

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <NextImage
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or
          {' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            start your 14-day free trial
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  onChange={onPasswordChange}
                  value={passwordValue}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                Already have an account?
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  &nbsp;Sign in
                </a>
              </div>
            </div>

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
              >
                {isLoading ? <LoadingSpinner /> : 'Sign up'}
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6">
          {error && <ErrorBanner error={error} />}
        </div>
      </div>
    </div>
  )
}
