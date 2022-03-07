import Image from 'next/image'

function Profile({}){
    return(
        <div>
            <Image src="/imageProfile.png" width={40} height={40}/>
        </div>
    )
}

export default Profile