/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'

function Header({children}) {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet"/>
            </Head>
            {children}
        </div>
    )
}

export default Header
