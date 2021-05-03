import Image from 'next/image'
import HeaderItem from './HeaderItem'

// import {BadgeCheckIcon, CollectionIcon, Homeicon, LightningBoltIcon, SearchIcon, UserIcon} from '@graywolfai/react-heroicons'


import {BadgeCheckOutline, CollectionOutline, HomeOutline, LightningBoltOutline, SearchOutline, UserOutline} from '@graywolfai/react-heroicons'

const Header = () => {

    return (
        <header>
            <div>
                <HeaderItem title='Home' icon={HomeOutline}/>
            </div>

            <Image src='https://links.papareact.com/ua6' width={200} height={100} className='object-contain'/>
        </header>
    )
}

export default Header