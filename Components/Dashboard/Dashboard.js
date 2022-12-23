import React from 'react'
import classes from './Dashboard.module.css'
import Image from 'next/image'
import Footer from '../Footer/Footer'
const Dashboard = () => {
  return (
    <div>
        <div className={classes.header}>
            <p className={classes.name}>
                Hi Samuel
            </p>
            <h1><span>Breakfast</span> is ready</h1>
        </div>
        <p className={classes.opt}>Other options to consider (with recipe)</p>
        <div className={classes.options}>
            <div className={classes.option1}>
                <Image className={classes.chicken} src='/assets/chickenpic.png' alt='chicken' width={50} height={50}/>
                <p>Yam & Kontomire stew</p>
            </div>

            <div className={classes.option1}>
                <Image className={classes.chicken} src='/assets/chickenpic.png' alt='chicken' width={50} height={50}/>
                <p>Mashed potatos with grilled chicken</p>
            </div>  
           
        </div>
        <div className='currentMeal'>
        <div className={classes.meal}>
                <Image className={classes.mealchicken} src='/assets/chickenpic.png' alt='chicken' width={80} height={80}/>
                <p>Yam & Kontomire stew</p>
            </div>  
        </div>
        <Footer/>
    </div>
  )
}

export default Dashboard


