import Head from 'next/head'
import Image from 'next/image'
import css from '../styles/Home.module.css'
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useEffect } from 'react';
import { MoralisProvider } from "react-moralis";


export default function Home() {

    const { authenticate, isAuthenticated, user, Moralis, isInitialized } = useMoralis();
    const Web3API = useMoralisWeb3Api()

    const authenticateUser = () => {
        if (!isAuthenticated) {
            authenticate()
        } else {
            console.log(user);
            console.log("hello")
        }
    }

    const initializeMoralis = async() => {
        const options = { chain: 'eth', address: `${user?.attributes?.accounts[0]}` };
        const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);
        console.log(polygonNFTs)
    }

    useEffect(() => {
        if (isInitialized) {
            initializeMoralis();
        }
    }, [isInitialized])
    
    

    console.log(user?.attributes?.accounts[0])
    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div className={css.logo}>
                <Image layout='fill' src="/poNft wtext.png" objectFit='contain' alt="logo"/>
            </div>
            <div className={css.mainCont}>
                <div className={css.mainContCenter}>
                    <div className={css.title}>
                        <h1>
                            Take part to the
                            <span> NFT </span>
                            world,
                            <br/>with a futuristic tool.
                        </h1>
                        <p>
                            Know instantly about any airdrops,  tweets,
                            <br/>
                            achivements in       roadmaps...
                        </p>
                    </div>
                    <div className={css.btn}>
                        <button className={css.walletconnect} type="button" id="btn-login" onClick={authenticateUser}>Connect Wallet</button>
                    </div>
                    <div className={css.socials}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none"><path d="M32.5417 0.375016C31.1452 1.36009 29.599 2.11351 27.9625 2.60627C27.0842 1.59639 25.917 0.880609 24.6186 0.555742C23.3203 0.230875 21.9535 0.312593 20.7031 0.789844C19.4527 1.2671 18.379 2.11685 17.6273 3.22419C16.8756 4.33152 16.4821 5.64301 16.5 6.98127V8.4396C13.9372 8.50605 11.3977 7.93766 9.10776 6.78504C6.81779 5.63242 4.84842 3.93136 3.37504 1.83335C3.37504 1.83335 -2.45829 14.9584 10.6667 20.7917C7.66331 22.8304 4.08548 23.8526 0.458374 23.7084C13.5834 31 29.625 23.7084 29.625 6.93752C29.6237 6.5313 29.5846 6.12609 29.5084 5.7271C30.9968 4.25928 32.0471 2.40606 32.5417 0.375016Z" fill="url(#paint0_linear_4_3)"/><defs><linearGradient id="paint0_linear_4_3" x1="2.70421" y1="-4.56984" x2="35.9714" y2="-0.0435274" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA800"/><stop offset="1" stopColor="#FF6E4E"/></linearGradient></defs></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="25" viewBox="0 0 34 25" fill="none"><path d="M28.2365 2.09374C26.0788 1.11562 23.7716 0.404768 21.3596 0C21.0633 0.518898 20.7173 1.21683 20.4787 1.77203C17.9146 1.39843 15.3741 1.39843 12.8572 1.77203C12.6186 1.21683 12.2647 0.518898 11.9658 0C9.55112 0.404768 7.24133 1.11824 5.0836 2.09892C0.731448 8.47087 -0.448349 14.6845 0.141551 20.81C3.02813 22.8985 5.82557 24.1672 8.5758 24.9974C9.25484 24.092 9.86046 23.1294 10.3822 22.115C9.38854 21.7492 8.43684 21.2978 7.5376 20.7737C7.77617 20.6024 8.00952 20.4234 8.23497 20.2392C13.7197 22.7247 19.679 22.7247 25.0982 20.2392C25.3263 20.4234 25.5597 20.6024 25.7956 20.7737C24.8937 21.3003 23.9394 21.7518 22.9458 22.1176C23.4675 23.1294 24.0705 24.0946 24.7522 25C27.505 24.1698 30.3051 22.9011 33.1917 20.81C33.8838 13.709 32.0093 7.55243 28.2365 2.09374ZM11.1294 17.0429C9.48295 17.0429 8.13271 15.5537 8.13271 13.7402C8.13271 11.9267 9.45411 10.4349 11.1294 10.4349C12.8048 10.4349 14.1549 11.924 14.1261 13.7402C14.1287 15.5537 12.8048 17.0429 11.1294 17.0429ZM22.2038 17.0429C20.5573 17.0429 19.2071 15.5537 19.2071 13.7402C19.2071 11.9267 20.5285 10.4349 22.2038 10.4349C23.8791 10.4349 25.2293 11.924 25.2005 13.7402C25.2005 15.5537 23.8791 17.0429 22.2038 17.0429Z" fill="url(#paint0_linear_4_4)"/><defs><linearGradient id="paint0_linear_4_4" x1="2.33333" y1="-4.71015" x2="36.7823" y2="0.387047" gradientUnits="userSpaceOnUse"><stop stopColor="#FFA800"/><stop offset="1" stopColor="#FF6E4E"/></linearGradient></defs></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
