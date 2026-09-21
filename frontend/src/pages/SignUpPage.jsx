import { SignUp } from "@clerk/clerk-react"


function SignUpPage() {
 return <div className={'auth-container'}>
    <SignUp routing={'path'} path={'/sign-up'} signInUrl={'/sign-in'}> </SignUp>
    

 </div>   
}

export default SignUpPage