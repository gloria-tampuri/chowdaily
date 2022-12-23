import React from 'react'
import classes from './SignIn.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className={classes.signin}>
        <div className={classes.header}>
           <div className={classes.words}>
           <h1>Creat an</h1>
            <h1>account</h1>
           </div>
        </div>

        <div className={classes.mediums}>
            <Link href='' className={classes.medium}>
                <p> Sign up with</p>
                <Image src='/assets/google.png' alt='google sign' width={30} height={30}/>
            </Link>

            <Link href='' className={classes.medium}>
                <p> Sign up with</p>
                <Image src='/assets/instagram.png' alt='instagram sign' width={30} height={30}/>
            </Link>

            <Link href='' className={classes.medium}>
                <p> Sign up with</p>
                <Image src='/assets/twitter.png' alt='twitter sign' width={30} height={30}/>
            </Link>

            <Link href='' className={classes.medium}>
                <p> Sign up with</p>
                <Image src='/assets/facebook.png' alt='facebook sign' width={30} height={30}/>
            </Link>
        </div>

        <div className={classes.inOrUp}> <p className={classes.inOrUpp}> Already have an account?  </p>
        <Link className={classes.inOrUpL} href='/signin'><p>Sign in</p></Link>
        </div>

    </div>
  )
}

export default SignUp