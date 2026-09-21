import {SignIn} from '@clerk/clerk-react'

function SignInPage() {
 return <div className={'auth-container'}>
    <SignIn routing={'path'} path={'/sign-in'} signUpUrl={'/sign-up'}> </SignIn>
    

 </div>      
}

export default SignInPage