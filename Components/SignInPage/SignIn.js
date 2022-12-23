import React from 'react'
import classes from './SignIn.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className={classes.signin}>
        <div className={classes.header}>
           <div className={classes.words}>
           <h1>Welcome back!</h1>
            <h1>Login</h1>
           </div>
        </div>

        <div className={classes.mediums}>
            <Link href='' className={classes.medium}>
                <p> Sign in with</p>
                <Image src='/assets/google.png' alt='google sign' width={30} height={30}/>
            </Link>

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