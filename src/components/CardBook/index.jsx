import style from './style.module.css'

const CardBook = (props) =>{

    const cardBg = {
        background: `url(${ props.backgroundImage })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return(
        <div className= { style.cardBox } style={ cardBg }>
            <h2>{ props.index }</h2>
            <h3>{ props.titleCard }</h3>
        </div>
    )
}

export default CardBook