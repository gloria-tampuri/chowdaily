import React,{useContext} from 'react'
import Image from 'next/image'
import Modal from '../Modal/Modal'
import classes from './Edit.module.css'
import {AiOutlineClose} from 'react-icons/ai'
import { EditContext } from '../../Context/EditContext'
import{MdAddAPhoto}from 'react-icons/md'


const Edit = () => {
    const editModalCtx = useContext(EditContext)
    const{editModal, showEditModal, hideEditModal}=editModalCtx

    const onEditSubmit=(e)=>{
        e.preventDefault()
        hideEditModal()
    }
  return (
    <Modal>
    <div className={classes.close}><AiOutlineClose onClick={hideEditModal} className={classes.closeIcon}/></div>
   <h2 className={classes.header}>Edit Meal</h2>

    <Image className={classes.foodpic} src='/assets/chickenpic.png' width={150} height={150} alt='foodpic'/>

   <form className={classes.addMealForm} onSubmit={onEditSubmit}>
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
 <label className={classes.photolabel}> <MdAddAPhoto/> &nbsp; Update photo
 <input type='file' placeholder='Add image'
 id="food-pic"
 name="food-pic"
 accept=".jpg, .jpeg, .png" 
 className={classes.photoinput}/></label>
</div>
<button type='submit'>Update</button>
   </form>

   </Modal>
  )
}

export default Edit