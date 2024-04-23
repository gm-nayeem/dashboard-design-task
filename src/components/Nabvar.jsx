import { IoIosMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

import ProfileImage from '../assets/Profile.jpeg';

const Nabvar = () => {
    return (
        <div className='fixed z-10 w-full bg-gray-700 flex items-center'>

            <div className='w-[180px] flex gap-4 justify-between items-center'>
                <h2 className='text-red-500 font-semibold text-md pl-4'>LOGO</h2>
                <div className='flex gap-x-4 items-center'>
                    <p className=''>
                        <IoIosMenu className="text-xl cursor-pointer" />
                    </p>
                    <div className='h-[52px] w-[0.5px] bg-white/70'></div>
                </div>
            </div>

            <div className='w-[calc(100%-180px)] flex justify-between items-center px-4 gap-x-4'>
                <div className="w-[120px] md:w-[160px] px-3 py-1 rounded-full bg-gray-900 flex justify-between items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent text-xs w-full border-none outline-none"
                    />
                    <IoSearch />
                </div>
                <div className="flex gap-x-2 text-md items-center">
                    <IoMdNotifications className="text-red-500 mr-2 cursor-pointer" />
                    <img
                        src={ProfileImage}
                        alt="Profile"
                        className="w-9 h-9 rounded-full object-cover"
                    />
                    <p className="text-xs">John Doe</p>
                    <FaAngleDown className="cursor-pointer" />
                </div>
            </div>

        </div>
    )
}

export default Nabvar