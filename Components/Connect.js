import ReactDom from 'react-dom'
import css from  '../styles/connect.module.css';

export default function Connect({ open, children, onClose }){
    if (!open) return null
    return ReactDom.createPortal(
    <>
        <div className={css.overlay} onClick={onClose}></div>
        <div className={css.mainCont}>
            {children}
        </div>
    </>,
    document.getElementById('mainIndex')
    )
}
