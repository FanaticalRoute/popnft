import ReactDom from 'react-dom'
import css from  '../styles/load.module.css';

export default function Connect({ open, children, onClose }){
    if (!open) return null
    return ReactDom.createPortal(
    <>
    </>,
    document.getElementById('mainIndex')
    )
}