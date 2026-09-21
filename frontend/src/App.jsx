import {Routes,Route} from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn} from '@clerk/clerk-react';
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import PricingPage from './pages/PricingPage'
import DashboardPage from './pages/DashboardPage'
import SignUpPage from './pages/SignUpPage'
import Layout from './components/layout'

function ProtectedRoute({children}) {
    return <>
        <SignedIn>
            {children}
        </SignedIn>
        <SignedOut>
            <RedirectToSignIn />
        </SignedOut>
    </>
}

function App(){
    return <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element = {<HomePage />} />

            <Route path={'sign-in/*'} element= {<SignInPage />} />
            <Route path={'sign-up/*'} element= {<SignUpPage />} />
            <Route path={'pricing'} element= {<PricingPage />} />

            <Route 
                path= {'dashboard'}
                element = {
                    <ProtectedRoute>
                        <DashboardPage />
                    </ProtectedRoute>
                }
            />

        </Route>
    </Routes>
}

export default App
