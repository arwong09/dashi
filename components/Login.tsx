import NextImage from 'next/image'
import Link from 'next/link'
import LoadingSpinner from './LoadingSpinner'
import ErrorNotification from './ErrorNotification'
import useLogin from '../hooks/useLogin'
import MaxWidthLayout from '@/layouts/MaxWidthLayout'

const Login = () => {
  const {
    onEmailChange,
    emailValue,
    onPasswordChange,
    passwordValue,
    onSubmit,
    isLoading,
    error,
  } = useLogin()

  return (
    <div className="bg-slate-50 h-full">
      <MaxWidthLayout>
        <div className="pt-14 pb-10 pl-6">
          <div className="h-6 relative">
            <NextImage
              objectFit="contain"
              objectPosition="left"
              layout="fill"
              className="mx-auto"
              src="/logo.png"
              alt="Workflow"
            />
          </div>
        </div>
        <div className="w-full bg-white rounded-md shadow-xl px-16 py-14">
          <h1 className="font-semibold text-2xl text-slate-700 mb-5">
            Sign in to your account
          </h1>
          <form className="space-y-8" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-700">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  onChange={onEmailChange}
                  value={emailValue}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="transition appearance-none block w-full px-3 py-3 border border-zinc-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 focus:border-indigo-300 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between w-full">
                <label
                  htmlFor="password"
                  className="block text-sm text-slate-700"
                >
                  Password
                </label>
                <div className="flex items-center justify-end">
                  <div className="text-sm">
                    <Link
                      href="/reset-password"
                      className="transition text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 focus:border-indigo-300 rounded"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-2.5">
                <input
                  onChange={onPasswordChange}
                  value={passwordValue}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="transition appearance-none block w-full px-3 py-3 border border-zinc-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 focus:border-indigo-300 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="transition w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 disabled:bg-indigo-300"
              >
                {isLoading ? <LoadingSpinner /> : 'Sign in'}
              </button>
              <div className="mt-6 ml-2 text-sm flex justify-center w-full text-slate-700">
                Don&apos;t have an account?
                <Link
                  href="signup"
                  className="transition ml-1 text-indigo-500 hover:text-indigo-600 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 focus:border-indigo-300 rounded"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </MaxWidthLayout>
    </div>
  )
}

export default Login
