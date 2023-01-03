import { useContext, useState,useEffect} from 'react'
import Modal from '../Modal/Modal'
import classes from './Addmeal.module.css'
import {AiOutlineClose} from 'react-icons/ai'
import{MdAddAPhoto}from 'react-icons/md'

import { ModalContext } from '../../Context/ModalContext'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../../library/firebase'


const AddMeal = () => {
  const addModal = useContext(ModalContext)
  const[foodName, setFoodName]=useState('')
  const[foodType,setFoodType]=useState('')
  const [photo, setPhoto]=useState('')
  const[user,setUser]=useState({})

  
const auth = getAuth(app);


useEffect(() => {
    onAuthStateChanged(auth, user => {
       if(!user){
        router.push('/signin')
       return
       }else{
        const {displayName,email, uid, photoURL} = user
        const userInfo = {
          name: displayName,
          email,
          userId: uid,
          image: photoURL
        }
        setUser(userInfo)
       }
    });
}, [auth]);


    const onSubmit=(e)=>{
      e.preventDefault()
      addModal.hideModal()

      const info={
        foodName,
        foodType,
        photo,
        userId: user.userId
      }
      console.log(info);
    }

  return (
   <Modal>
    <div className={classes.close}><AiOutlineClose onClick={addModal.hideModal} className={classes.closeIcon}/></div>
   <h2 className={classes.header}>Add Meal</h2>

   <form className={classes.addMealForm} onSubmit={onSubmit}>
    <input type='text' placeholder='Name of Meal...' value={foodName} onChange={(e)=>{setFoodName(e.target.value)}}/>

    <select className={classes.select} name="pets" id="pet-select" value={foodType} onChange={(e)=>{setFoodType(e.target.value)}}>
    <option value="">select meal type</option>
    <option value="breakfast">Breakfast</option>
    <option value="lunch">Lunch</option>
    <option value="super">Super</option>
</select>
<div className={classes.photo}>
{/* <input type='file' placeholder='Add image'
 id="food-pic"
 name="food-pic"
 accept=".jpg, .jpeg, .png" 
 className={classes.photoinput}/> */}
 <label className={classes.photolabel}> <MdAddAPhoto/> &nbsp; Add photo
 <input type='file' placeholder='Add image'
 id="food-pic"
 name="food-pic"
 accept=".jpg, .jpeg, .png" 
 value={photo}
 onChange={(e)=>{setPhoto(e.target.value)}}
 className={classes.photoinput}/></label>
</div>
<button type='submit'>Submit</button>
   </form>

   </Modal>
  )
}

export default AddMeal