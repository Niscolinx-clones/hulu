import Image from 'next/image'
import HeaderItem from './HeaderItem'



import {BadgeCheckOutline, CollectionOutline, HomeOutline, LightningBoltOutline, SearchOutline, UserOutline} from '@graywolfai/react-heroicons'

import {AiFillAccountBook} from 'react-icons/ai'

const Header = () => {

    return (
        <header>
            <div>
                {/* <HeaderItem title='Home' Icon={'HomeOutline'}/> */}
                {/* <BadgeCheckOutline/> */}
                <AiFillAccountBook/>
            </div>

            <Image src='https://links.papareact.com/ua6' width={200} height={100} className='object-contain'/>
        </header>
    )
}

export default Header