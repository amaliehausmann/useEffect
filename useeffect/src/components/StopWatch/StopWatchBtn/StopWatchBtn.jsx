import style from './StopWatchBtn.module.scss'
export function StopWatchBtn({action, name, styling}){

    return(
        <button className={`${style[styling]}`} onClick={action}>{name}</button>
    )
}