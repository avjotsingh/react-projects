import classes from './Card.module.css'

const Card = props => {
    let classNames = `${classes.card}`
    if (props.className) {
        classNames += ` ${props.className}`
    }
    return <div className={classNames}>{props.children}</div>
}

export default Card;