import NextImage from 'next/image'
import Link from 'next/link'
import LoadingSpinner from './LoadingSpinner'
import ErrorNotification from './ErrorNotification'
import useLogin from '../hooks/useLogin'

const Login = () => {
  const {
    onEmailChange, emailValue, onPasswordChange, passwordValue, onSubmit, isLoading, error,
  } = useLogin()

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
          <h2 className="mb-8 text-2xl font-bold text-gray-700">Sign in to your account</h2>
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
              <div className="flex justify-between w-full">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="flex items-center justify-end">
                  <div className="text-sm">
                    <Link href="/reset-password">
                      <a className="text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

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

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
              >
                {isLoading ? <LoadingSpinner /> : 'Sign in'}
              </button>
              <div className="mt-6 ml-2 text-sm flex justify-center w-full text-gray-700">
                Don&apos;t have an account?
                <Link href="signup"><a className="ml-1 text-indigo-600 hover:text-indigo-500">Sign up</a></Link>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-6">
          {error && <ErrorNotification error={error} />}
        </div>
      </div>
    </div>
  )
}

export default Login
