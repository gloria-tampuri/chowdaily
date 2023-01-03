import React from 'react'
import classes from './Footer.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signOut,getAuth } from 'firebase/auth'
import app from '../../library/firebase'

const Footer = () => {
  const router = useRouter()
  const auth = getAuth(app);

 
  const handleLogout = () => {               
    signOut(auth).then(() => {
    
      router.push('/')
    
    }).catch((error) => {
    // An error happened.
    });
}
  return (
    <div className={classes.Footer}>
      <div className={classes.opt}>
        <Image src='/assets/dashboard.png' alt='dashborad' width={40} height={40} onClick={() => router.push('/dashboard')} />
        <p>Dashboard</p>
      </div>

      <div className={classes.opt}>
        <Image src='/assets/menu-like.png' alt='dashborad' width={40} height={40} onClick={() => router.push('/menu')} />
        <p>Menu</p>
      </div>

      <div className={classes.opt}>
        <Image src='/assets/half-circle.png' alt='dashborad' width={40} height={40} onClick={handleLogout} />
        <p>Logout</p>
      </div>

    </div>
  )
}

export default Footer