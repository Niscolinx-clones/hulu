import Image from 'next/image'
import HeaderItem from './HeaderItem'



import {AiFillAccountBook} from 'react-icons/ai'

const Header = () => {

    return (
        <header>
            <div>
                {/* <BadgeCheckOutline/> */}
                <AiFillAccountBook/>
            </div>

            <Image src='https://links.papareact.com/ua6' width={200} height={100} className='object-contain'/>
        </header>
    )
}

export default Header