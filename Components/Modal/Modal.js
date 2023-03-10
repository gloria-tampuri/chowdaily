import React from 'react'
import classes from './Modal.module.css'

const Backdrop=( props)=>{
    return(
        <div className={classes.backdrop}/>
    )
}

const ModalOverlay=(props)=>{
    return(
        <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>

        </div>

    )
}

// const portalElement =document.getElementById('overlays')

const Modal = (props) => {
 
  return (
    <>
    {/* {ReactDOM.createPortal(<Backdrop onClose={props.onCloseModal}/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay> {props.children}</ModalOverlay>, portalElement)} */}
    <Backdrop/>
    <ModalOverlay>{props.children} </ModalOverlay>
    </>
  )
}

export default Modal