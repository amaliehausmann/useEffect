import style from './StopwatchDisplay.module.scss'

export function StopwatchDisplay({time}){

    return(
        <h2 className={style.displayStyling}>{time}</h2>
    )
}