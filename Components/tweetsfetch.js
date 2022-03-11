// Get User objects by username, using bearer token authentication
// https://developer.twitter.com/en/docs/twitter-api/users/lookup/quick-start
import { TwitterApi } from 'twitter-api-v2';
import {useState, useRef, useEffect} from 'react'



function UserSearcher({results}) {
    const [result, setResult] = useState("")
    const appOnlyClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAFBFXQEAAAAA5y%2F6M2%2FlWOauj%2FZ3DRobL1sg20g%3Dxz0AsciDRdouB6ESZtPFSM7ZCUlz2wNOT7sSwIROA207Tz8yV3');
    const roClient = appOnlyClient.readOnly;
    useEffect(async() => {
        const user = await roClient.v2.userByUsername('thetaylorwang');
        console.log(user)
    }, [])
    
    return (
        <h1>{console.log(result)}</h1>
      )
}

export default UserSearcher