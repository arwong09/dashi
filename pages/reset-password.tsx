import { sendPasswordResetEmail, AuthError } from 'firebase/auth'
import { FormEvent, useState } from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
import LoadingSpinner from '@/src/components/LoadingSpinner'
import ErrorNotification from '@/src/components/ErrorNotification'
import MaxWidthLayout from '@/src/layouts/MaxWidthLayout'
import auth from '@/src/utils/initializeFirebase'
import SuccessNotification from '@/src/components/SuccessNotification'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [submissionError, setSubmissionError] = useState<AuthError | null>(null)

  const onEmailChange = (e: FormEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value)
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage('')
    setSubmissionError(null)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage('Check your email to reset your password')
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setSuccessMessage('Check your email to reset your password')
        } else {
          setSubmissionError(error)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
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
            Reset your password
          </h1>
          <h2 className="text-sm text-slate-600">
            Enter the email address associated with your account and we&apos;ll
            send you a link to reset your password.
          </h2>
          <form className="mt-6" onSubmit={onSubmit}>
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

            <div className="mt-6">
              <button
                disabled={isLoading || !email}
                type="submit"
                className="h-12 transition w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 disabled:bg-indigo-300"
              >
                {isLoading ? <LoadingSpinner /> : 'Continue'}
              </button>
              <div className="mt-6 text-sm flex justify-center w-full text-slate-700">
                <Link
                  href="/login"
                  className="transition text-indigo-500 hover:text-indigo-600 focus:outline-none focus:ring-indigo-200/80 focus:ring-4 focus:border-indigo-300 rounded"
                >
                  Return to sign in
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-6">
          {submissionError && <ErrorNotification error={submissionError} />}
          {successMessage && <SuccessNotification message={successMessage} />}
        </div>
      </MaxWidthLayout>
    </div>
  )
}
