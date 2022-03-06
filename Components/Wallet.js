import {useState, useEffect, useCallback, useRef} from 'react'
import css from '../styles/Wallet.module.css'

function Wallet({opt}) {
    const [openMenu, setOpenMenu] = useState(false);
    const elementClickSafe = useRef()
    const clickAway = useCallback((e)=>{
        if(!openMenu) return
        if(!elementClickSafe.current.contains(e.target)){
            setOpenMenu(false);
        }
    },[openMenu])

    useEffect(() => {
        window.addEventListener('click', clickAway)
        return () => {
            window.removeEventListener('click', clickAway)
        };
    }, [clickAway]);


    return (
        <div className={css.mainCont} ref={elementClickSafe}>
            <div className={css.mainWalletCont} onClick={()=>{setOpenMenu(true)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="35" viewBox="0 0 43 35" fill="none">
                    <path d="M26.9583 13.125H18.2083" stroke="#292D32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M40.0835 15.9978V19.0021C40.0835 19.8042 39.4418 20.4603 38.6251 20.4895H35.7668C34.1918 20.4895 32.7481 19.3374 32.6168 17.7624C32.5293 16.8437 32.8793 15.9833 33.4918 15.3853C34.0314 14.8312 34.7751 14.5104 35.5918 14.5104H38.6251C39.4418 14.5395 40.0835 15.1957 40.0835 15.9978Z" stroke="#292D32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M33.4917 15.3854C32.8792 15.9833 32.5293 16.8437 32.6168 17.7624C32.748 19.3374 34.1917 20.4895 35.7667 20.4895H38.6251V22.6041C38.6251 26.9791 35.7084 29.8958 31.3334 29.8958H18.2084C13.8334 29.8958 10.9167 26.9791 10.9167 22.6041V12.3958C10.9167 8.42913 13.3084 5.65829 17.0272 5.19162C17.4063 5.13329 17.8001 5.10413 18.2084 5.10413H31.3334C31.7126 5.10413 32.0772 5.11869 32.4272 5.17702C36.1897 5.61452 38.6251 8.39996 38.6251 12.3958V14.5104H35.5917C34.7751 14.5104 34.0313 14.8312 33.4917 15.3854Z" stroke="#292D32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8" cy="17" r="6" fill="#30FF45" stroke="white" strokeWidth="3"/>
                </svg>
            </div>
            <div className={`${openMenu? css.openShowPopup : ''} ${css.popUpCont}`}>
                <div className={css.textCont}>
                    <h1>Wallet address</h1>
                    <p>bc1qxy2kgdygjrsqtzq2n0yrf2493p8515...</p>
                </div>
                <div className={css.textCont}>
                    <h1>Wallet address</h1>
                    <p>bc1qxy2kgdygjrsqtzq2n0yrf2493p8515...</p>
                </div>
                <button className={css.buttonGradient}>Disconnect</button>
            </div>
        </div>
    )
}

export default Wallet