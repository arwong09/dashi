import type { NextPage } from 'next'
import SignUp from '../components/SignUp'
import withNavLayout from '../layouts/withNavLayout'

const Home: NextPage = () => (
  <SignUp />
)
export default withNavLayout(Home)
