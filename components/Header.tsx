import Image from 'next/image'
import HeaderItem from './HeaderItem'


// import {, HomeOutline, LightningBoltOutline, SearchOutline, UserOutline} from '@graywolfai/react-heroicons'

import {HiOutlineCollection} from 'react-icons/hi'
import {BiBadgeCheck, BiSearch} from 'react-icons/bi'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'

const Header = () => {

    return (
        <header>
            <div>
                {/* <BadgeCheckOutline/> */}
                <HeaderItem title='Home' Icon={HiOutlineCollection}/>
              
            </div>

            <Image src='https://links.papareact.com/ua6' width={200} height={100} className='object-contain'/>
        </header>
    )
}

export default Header