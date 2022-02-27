import Head from 'next/head'
import Image from 'next/image'
import css from '../styles/Home.module.css'

export default function Home() {
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
                            <span>NFT</span>
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
                        <button className={css.walletconnect} type="button" id="btn-login">Connect Wallet</button>
                    </div>
                    <div className={css.socials}>
                        <img src="https://fanaticalroute.github.io/popnft/images/twitter.png" alt="twitter" className={css.twitter}/>
                        <img src="https://fanaticalroute.github.io/popnft/images/discord.png" alt="discord" className={css.discord}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
