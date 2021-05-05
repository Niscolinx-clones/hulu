import Image from 'next/image'
import HeaderItem from './HeaderItem'


// import {, HomeOutline, LightningBoltOutline, SearchOutline, UserOutline} from '@graywolfai/react-heroicons'

import {HiOutlineCollection, HiOutlineLightningBolt} from 'react-icons/hi'
import {BiBadgeCheck, BiSearch} from 'react-icons/bi'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'

const Header = () => {

    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='Home' Icon={AiOutlineHome}/>
                <HeaderItem title='Trending' Icon={HiOutlineLightningBolt}/>
                <HeaderItem title='Verified' Icon={BiBadgeCheck}/>
                <HeaderItem title='Collections' Icon={HiOutlineCollection}/>
                <HeaderItem title='Search' Icon={BiSearch}/>
                <HeaderItem title='Account' Icon={AiOutlineUser}/>  
              
            </div>

            <Image src='https://links.papareact.com/ua6' width={200} height={100} className='object-contain'/>
        </header>
    )
}

export default Header