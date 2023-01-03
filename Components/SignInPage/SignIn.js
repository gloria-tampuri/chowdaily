import React from 'react'
import classes from './SignIn.module.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Image from 'next/image'
import Link from 'next/link'
import app from '../../library/firebase';
import { useRouter } from 'next/router';

const SignIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const router = useRouter()

    //Google signup
  const googleSignInHandler=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
     if(user){
      console.log(user);
      router.push('/dashboard')
     }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }


  return (
    <div className={classes.signin}>
        <div className={classes.header}>
           <div className={classes.words}>
           <h1>Welcome back!</h1> 
            <h1>Login</h1>
           </div>
        </div>

        <div className={classes.mediums}>
            <div onClick={googleSignInHandler} className={classes.medium}>
                <p> Sign in with</p>
                <Image src='/assets/google.png' alt='google sign' width={30} height={30}/>
            </div>

            <Link href='' className={classes.medium}>
                <p> Sign in with</p>
                <Image src='/assets/instagram.png' alt='instagram sign' width={30} height={30}/>
            </Link>

            <Link href='' className={classes.medium}>
                <p> Sign in with</p>
                <Image src='/assets/twitter.png' alt='twitter sign' width={30} height={30}/>
            </Link>

            <Link href='' className={classes.medium}>
                <p> Sign in with</p>
                <Image src='/assets/facebook.png' alt='facebook sign' width={30} height={30}/>
            </Link>
        </div>

        <div className={classes.inOrUp}> <p className={classes.inOrUpp}>Don't have an account?   </p>
        <Link className={classes.inOrUpL} href='/signup'><p>Signup</p></Link>
        </div>

    </div>
  )
}

export default SignIn