import type { NextPage } from 'next'
import SignUp from '../components/SignUp'
import withNavLayout from '../layouts/withNavLayout'

const SignUpPage: NextPage = () => <SignUp />

export default withNavLayout(SignUpPage)
