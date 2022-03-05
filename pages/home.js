import {useState, useRef, useEffect} from 'react'
import Image from 'next/image'
import css from '../styles/homeUser.module.css'
import {TwitterTweetEmbed} from 'react-twitter-embed';

function Home() {
    const [selectedNav, setSelectedNav] = useState(0);
    const firstButtonSize = useRef();

    return (
    <div className={css.flexDiv}>
        <div className={css.headerSide}>
            <div className={css.headerLogo}>
                <Image src="/poNft wtext.png" objectFit='contain' layout='fill' alt="Popnft Logo"/>
            </div>
        </div>

        <div className={css.centerCont}>
            <div className={css.mainContSliderButton}>
                <button ref={firstButtonSize} onClick={e=>{setSelectedNav(0)}}>Tweets</button>
                <button onClick={e=>{setSelectedNav(50)}}>Airdrops</button>
                <button onClick={e=>{setSelectedNav(100)}}>Roadmaps</button>
                <div className={css.dragWidthSlide} style={{left: `${selectedNav}%`, transform: `translateX(${(selectedNav === 0)? '0%': (selectedNav === 50)?'-50%': (selectedNav === 100)? '-100%':''})`}}></div>
            </div>
            <div className={css.mainContTweets}>
                {/*0 == Tweets, 50 == Airdrops, 100 == Roadmaps*/}
                {selectedNav == 0 &&
                    <div style={{height: '90%'}}>
                        <h1 className={css.headingTweetsTitle}>Latest <span className={css.yellowTitle}>Achievements</span></h1>
                        <div className={css.contentScrollWrap}>
                            <div className={css.mainTweets}>
                                {/*You can use array.map*/}
                                <TwitterTweetEmbed tweetId={'1499844629956415490'}/>
                                <TwitterTweetEmbed tweetId={'1499368382562451456'}/>
                                <TwitterTweetEmbed tweetId={'1499844629956415490'}/>
                                <TwitterTweetEmbed tweetId={'1499844629956415490'}/>
                                <TwitterTweetEmbed tweetId={'1499844629956415490'}/>
                            </div>
                        </div>
                        {/*put loading animation*/}
                    </div>
                }
            </div>
        </div>
    </div>
    )
}

export default Home