import { FormEvent, useState } from 'react'
import { sendPasswordResetEmail, AuthError } from 'firebase/auth'
import auth from '../utils/initializeFirebase'

export default function useResetPassword(successCallback?: () => void) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [submissionError, setSubmissionError] = useState<AuthError | null>(null)

  const onEmailChange = (e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage('')
    setSubmissionError(null)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage('Password reset email sent')
        successCallback?.()
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setSuccessMessage('Password reset email sent')
        } else {
          setSubmissionError(error)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return {
    emailValue: email,
    error: submissionError,
    isLoading,
    successMessage,
    onEmailChange,
    onSubmit,
  }
}
