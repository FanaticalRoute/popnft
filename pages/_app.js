import '../styles/globals.css'
import Header from './header'
import { MoralisProvider } from "react-moralis";

function MyApp({Component, pageProps}) {
    return (
        <MoralisProvider appId="0wRmfs9whI2CBo9wAQiEiG18u8nZkFZHW5WEXvVe" serverUrl="https://zkvmngnc4gmg.usemoralis.com:2053/server">
            <Header>
                <Component {...pageProps}/>
            </Header>
        </MoralisProvider>
    )
}

export default MyApp
