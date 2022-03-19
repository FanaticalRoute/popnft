// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Get User objects by username, using bearer token authentication
// https://developer.twitter.com/en/docs/twitter-api/users/lookup/quick-start
import { TwitterApi } from 'twitter-api-v2';



async function UserSearcher(req, res) {
    const { pid } = req.query
    const appOnlyClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAFBFXQEAAAAA5y%2F6M2%2FlWOauj%2FZ3DRobL1sg20g%3Dxz0AsciDRdouB6ESZtPFSM7ZCUlz2wNOT7sSwIROA207Tz8yV3');
    const roClient = appOnlyClient.readOnly;
    const user = await roClient.v2.userByUsername('thetaylorwang');
    console.log(user.id)
    const jsTweets = await roClient.v2.search(pid, { 'media.fields': 'url' });
    res.json(jsTweets)
}

export default UserSearcher