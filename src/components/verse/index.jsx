import style from './style.module.css'

const Verse = (props) =>{
    return (
        <div className={ style.verseBox}>
            <p><span>{ props.number }.</span>{ props.text }</p>
        </div>
    )
}

export default Verse