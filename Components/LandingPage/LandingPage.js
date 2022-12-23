import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classes from './LandingPage.module.css'
// import {chicken} from '/assets/chickenpic.png'

const LandingPage = () => {
  return (
    <div className={classes.landing}>
        <div className={classes.header}>
           <div className={classes.words}>
           <h1>Quite the worries</h1>
            <h1>in meals</h1>
            <h1>select</h1>
           </div>
           
        </div>
        <div className={classes.white}>
        <Image src='/assets/chickenpic.png' alt='full roasted chicken' width={230} height={230} className={classes.chicken}/>
            <Link href='/signin' className={classes.getStartedL}>
                <h1 className={classes.getStarted}>Get Started</h1>
            </Link>
        </div>

    </div>
  )
}

export default LandingPage