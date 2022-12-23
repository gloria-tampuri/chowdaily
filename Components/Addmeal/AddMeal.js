import { useContext, useState} from 'react'
import Modal from '../Modal/Modal'
import classes from './Addmeal.module.css'
import {AiOutlineClose} from 'react-icons/ai'
import{MdAddAPhoto}from 'react-icons/md'

import { ModalContext } from '../../Context/ModalContext'


const AddMeal = () => {
  const addModal = useContext(ModalContext)
  const[foodName, setFoodName]=useState('')
  const[foodType,setFoodType]=useState('')
  const [photo, setPhoto]=useState()

    const onSubmit=(e)=>{
      e.preventDefault()
      addModal.hideModal()
    }

  return (
   <Modal>
    <div className={classes.close}><AiOutlineClose onClick={addModal.hideModal} className={classes.closeIcon}/></div>
   <h2 className={classes.header}>Add Meal</h2>

   <form className={classes.addMealForm} onSubmit={onSubmit}>
    <input type='text' placeholder='Name of Meal...'/>
    <select className={classes.select} name="pets" id="pet-select">
    <option value="">select meal type</option>
    <option value="breakfast">Breakfast</option>
    <option value="lunch">Lunch</option>
    <option value="super">Super</option>
</select>
<div className={classes.photo}>
<input type='file' placeholder='Add image'
 id="food-pic"
 name="food-pic"
 accept=".jpg, .jpeg, .png" 
 className={classes.photoinput}/>
 <label className={classes.photolabel}> <MdAddAPhoto/> &nbsp; Add photo
 <input type='file' placeholder='Add image'
 id="food-pic"
 name="food-pic"
 accept=".jpg, .jpeg, .png" 
 className={classes.photoinput}/></label>
</div>
<button type='submit'>Submit</button>
   </form>

   </Modal>
  )
}

export default AddMeal