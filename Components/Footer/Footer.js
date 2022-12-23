import React from 'react'
import classes from './Footer.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  return (
    <div className={classes.Footer}>
     <div className={classes.opt}>
     <Image src='/assets/dashboard.png' alt='dashborad' width={40} height={40} onClick={()=>router.push('/dashboard')}/>
     <p>Dashboard</p>
     </div>

     <div className={classes.opt}>
     <Image src='/assets/menu-like.png' alt='dashborad' width={40} height={40} onClick={()=>router.push('/menu')}/>
     <p>Menu</p>
     </div>

     <div className={classes.opt}>
     <Image src='/assets/half-circle.png' alt='dashborad' width={40} height={40} onClick={()=>router.push('/')}/>
     <p>Logout</p>
     </div>

    </div>
  )
}

export default Footer