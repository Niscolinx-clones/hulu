import Image from 'next/image'
import HeaderItem from './HeaderItem'

import {BadgeCheckIcon, CollectionIcon, Homeicon, LightningBoltIcon, SearchIcon, UserIcon}

const Header = () => {

    return (
        <header>
            <div>
                <HeaderItem title='Home' Icon={}/>
            </div>

            <Image src='https://links.papareact.com/ua6' width={200} height={100} className='object-contain'/>
        </header>
    )
}

export default Header