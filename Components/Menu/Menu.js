import React from 'react'
import Footer from '../Footer/Footer'
import classes from './Menu.module.css'
import Image from 'next/image'
import {MdDelete} from 'react-icons/md'
import AddMeal from '../Addmeal/AddMeal'
import { useContext } from 'react'
import{ ModalContext} from'../../Context/ModalContext'
import Edit from '../Edit/Edit'
import { EditContext } from '../../Context/EditContext'
import DeleteMeal from '../DeleteMeal/DeleteMeal'
import { DeleteContext } from '../../Context/DeleteContext'


const Menu = () => {
    const addModal = useContext(ModalContext)
    const editModalCtx = useContext(EditContext)
    const{editModal, showEditModal, hideEditModal}=editModalCtx
    const deleteCtx=useContext(DeleteContext)
    const{ hideDeleteModal,showDeleteModal,deleteModal}=deleteCtx
  return (
    <div>
        <div className={classes.header}>
            <p className={classes.name}>
                Hi Samuel
            </p>
            <h1><span>Create</span>  your meal catalogue</h1>
            <div className={classes.add}>
                <div className={classes.addmeal} >
                <Image className={classes.addbtn} src='/assets/add.png' alt='Add' width={50} height={50} onClick={addModal.showModal}/>
                <p>Add Meal</p>
                </div>
            </div>
        </div>
        <h2 className={classes.opt}>Meal Catalogue</h2>

        <div className={classes.catalogue}>
        <div className={classes.meal}>
                <Image className={classes.mealchicken} src='/assets/chickenpic.png' alt='chicken' width={80} height={80}/>
                <p>Yam & Kontomire stew</p>
                <Image onClick={showEditModal} className={classes.edit} src='/assets/edit.png' alt='edit' width={40} height={40} />
                <MdDelete className={classes.delete} onClick={showDeleteModal}/>
            </div>  

            <div className={classes.meal}>
                <Image className={classes.mealchicken} src='/assets/food1.png' alt='chicken' width={80} height={80}/>
                <p>Hausa Koko with bread</p>
                <Image onClick={showEditModal} className={classes.edit} src='/assets/edit.png' alt='edit' width={40} height={40} />
                <MdDelete className={classes.delete} onClick={showDeleteModal}/>
            </div>  
            <div className={classes.meal}>
                <Image className={classes.mealchicken} src='/assets/food2.png' alt='chicken' width={80} height={80}/>
                <p>Rice with gravy stew</p>
                <Image onClick={showEditModal} className={classes.edit} src='/assets/edit.png' alt='edit' width={40} height={40} />
                <MdDelete className={classes.delete} onClick={showDeleteModal}/>
            </div>  
            <div className={classes.meal}>
                <Image className={classes.mealchicken} src='/assets/food1.png' alt='chicken' width={80} height={80}/>
                <p>Banku with groundnut soup</p>
                <Image onClick={showEditModal} className={classes.edit} src='/assets/edit.png' alt='edit' width={40} height={40} />
                <MdDelete className={classes.delete} onClick={showDeleteModal}/>
            </div>  
        </div>
       { addModal.modal && <AddMeal/>}
      {editModal &&  <Edit/>}
      {deleteModal && <DeleteMeal/>}
        <Footer/>
    </div>
  )
}

export default Menu