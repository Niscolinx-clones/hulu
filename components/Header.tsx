import Image from 'next/image'
import HeaderItem from './HeaderItem'


// import {BadgeCheckOutline, CollectionOutline, HomeOutline, LightningBoltOutline, SearchOutline, UserOutline} from '@graywolfai/react-heroicons'

import {HiOutlineCollection} from 'react-icons/hi'

const Header = () => {

    return (
        <header>
            <div>
                {/* <BadgeCheckOutline/> */}
                <AiFillAccountBook/>
                <HeaderItem title='Home' Icon={HiOutlineCollection}/>
            </div>

            <Image src='https://links.papareact.com/ua6' width={200} height={100} className='object-contain'/>
        </header>
    )
}

export default Header