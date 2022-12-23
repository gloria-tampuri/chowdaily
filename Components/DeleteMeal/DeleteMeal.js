import React,{useContext} from 'react'
import Modal from '../Modal/Modal'
import classes from './Delete.module.css'
import {AiOutlineClose} from 'react-icons/ai'
import { DeleteContext } from '../../Context/DeleteContext'

const DeleteMeal = () => {
    const deleteCtx=useContext(DeleteContext)
    const{ hideDeleteModal}=deleteCtx
  return (
    <Modal>
        {/* <div className={classes.close}><AiOutlineClose onClick={hideDeleteModal} className={classes.closeIcon}/></div> */}
   <p className={classes.header}> Are you sure you want to delete meal?</p>

    <div className={classes.actions}>
        <div className={classes.actions1} onClick={hideDeleteModal}>Delete</div>
        <div className={classes.actions2} onClick={hideDeleteModal}>Cancel</div>
    </div>

    </Modal>
  )
}

export default DeleteMeal