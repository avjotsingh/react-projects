import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
import Card from './Card'


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick} />
}

const Overlay = (props) => {
    return <Card className={classes.overlay}>
        <div className={classes.content}>
        {props.children}
        </div> 
    </Card>
}


const Modal = props => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />, document.getElementById('modal'))}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('modal'))}
    </React.Fragment>
}

export default Modal;