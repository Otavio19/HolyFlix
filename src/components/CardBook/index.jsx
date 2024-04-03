import style from './style.module.css'

const CardBook = (props) =>{
    return(
        <div className= { style.cardBox }>
            <h3>{ props.titleCard }</h3>
        </div>
    )
}

export default CardBook