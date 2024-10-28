import { SignIn } from '@clerk/clerk-react'
import './signinpage.css'

const Signinpage = () => {
  return (
    <div className="signInPage">
    <SignIn
      path="/sign-in"
      signUpUrl="/sign-up"
      forceRedirectUrl="/dashboard"
    />
  </div>
  )
}

export default Signinpage