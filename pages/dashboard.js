import Image from 'next/image'
import css from '../styles/dashboard.module.css'
import Link from 'next/link';

function dashboard() {
  return (
    <div>
        <div className={css.headerSide}>
            <div className={css.headerLogo}>
                <Image src="/poNft wtext.png" objectFit='contain' layout='fill' alt="Popnft Logo"/>
            </div>
        </div>
        <div className={css.centerCont}>
            <h1 className={css.headingTweetsTitle}>Choose an <span className={css.yellowTitle}>NFT</span> collection</h1>
            <div className={css.gridGallery}>
                {
                    //you can put an array with titles, images and then map it. search array.map 
                    //to add images outside file, https://nextjs.org/docs/basic-features/image-optimization#domains
                    Array.apply(null, { length: 5 }).map((e, i) => (
                        <div key={i}>
                            <Link href='/home'>
                                <div key={i} className={css.gridItem}>
                                    <div className={css.imageItem}>
                                        <Image src="/assetsPlaceholder.jpg" layout="fill" alt=""/>
                                    </div>
                                    <h2>Bored Ape YC</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                }
                {
                    //you can put an array with titles, images and then map it. search array.map 
                    //to add images outside file, https://nextjs.org/docs/basic-features/image-optimization#domains
                    Array.apply(null, { length: 5 }).map((e, i) => (
                        <div key={i}>
                            <Link href='/home'>
                                <div key={i} className={css.gridItem}>
                                    <div className={css.imageItem}>
                                        <Image src="/nftsamp.png" layout="fill" alt=""/>
                                    </div>
                                    <h2>WonderPals</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default dashboard