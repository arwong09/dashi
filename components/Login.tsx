import { AuthError, signInWithEmailAndPassword } from 'firebase/auth'
import { FormEvent, useState } from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
import LoadingSpinner from '@/components/LoadingSpinner'
import ErrorNotification from '@/components/ErrorNotification'
import MaxWidthLayout from '@/layouts/MaxWidthLayout'
import auth from '@/utils/initializeFirebase'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submissionError, setSubmissionError] = useState<AuthError | null>(null)
  const router = useRouter()

  const onEmailChange = (e: FormEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value)
  const onPasswordChange = (e: FormEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value)
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmissionError(null)

    signInWithEmailAndPassword(auth, email, password)
      .then(() => router.push('/dashboard'))
      .catch((error) => {
        setSubmissionError(error)
      })
      .finally(() => setIsLoading(false))
  }

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
                  value={email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="transition appearance-none block w-full px-3 py-3 border border-zinc-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 focus:border-indigo-300 text-gray-600"
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
                  value={password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="transition appearance-none block w-full px-3 py-3 border border-zinc-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 focus:border-indigo-300 sm:text-sm"
                />
                <div className="">
                  {submissionError && (
                    <ErrorNotification error={submissionError} />
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                disabled={isLoading || !email || !password}
                type="submit"
                className="h-12 transition w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 disabled:bg-indigo-300"
              >
                {isLoading ? <LoadingSpinner /> : 'Sign in'}
              </button>
              <div className="mt-6 ml-2 text-sm flex justify-center w-full text-slate-700">
                Don&apos;t have an account?
                <Link
                  href="/register"
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
