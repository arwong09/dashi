import { FormEvent, useState } from 'react'
import { createUserWithEmailAndPassword, AuthError } from 'firebase/auth'
import auth from '../utils/initializeFirebase'

export default function useSignup(successCallback?: () => void) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submissionError, setSubmissionError] = useState<AuthError | null>(null)

  const onEmailChange = (e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
  const onPasswordChange = (e: FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmissionError(null)
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => successCallback?.())
      .catch((error) => setSubmissionError(error))
      .finally(() => setIsLoading(false))
  }

  return {
    emailValue: email,
    passwordValue: password,
    error: submissionError,
    isLoading,
    onEmailChange,
    onPasswordChange,
    onSubmit,
  }
}
