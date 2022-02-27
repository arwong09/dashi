import type { NextPage } from 'next'
import Login from '../components/Login'
import withNavLayout from '../layouts/withNavLayout'

const LoginPage: NextPage = () => <Login />

export default withNavLayout(LoginPage)
