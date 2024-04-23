import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";


const Sidebar = () => {
    const [showChatMenu, setShowChatMenu] = useState(false);

    return (
        <div className='fixed z-10 w-[180px] h-[calc(100vh-60px)] bg-gray-700 px-3 py-4 flex flex-col justify-between'>
            <div className="flex flex-col gap-y-6">
                <div className='flex flex-col gap-y-3'>
                    <p className='text-xs text-red-500'>MAIN</p>
                    <ul className='text-[10px] flex flex-col gap-y-3 pl-4 cursor-pointer'>
                        <li className='hover:bg-gray-900 ml-[-16px] pl-4 py-1 rounded-sm'>Dashboard</li>
                        <li className='hover:bg-gray-900 ml-[-16px] pl-4 py-1 rounded-sm'>Menu Layout</li>
                        <li className='hover:bg-gray-900 ml-[-16px] pl-4 py-1 rounded-sm'>Order List</li>
                        <li>
                            <p
                                className='text-red-500 bg-gray-900 ml-[-16px] pl-4 py-1 rounded-sm'
                                onClick={() => setShowChatMenu(!showChatMenu)}
                            >
                                Chef Page
                            </p>
                            <ul
                                style={{ display: showChatMenu ? '' : 'none' }}
                                className='flex flex-col gap-y-3 pt-4 pl-4 cursor-pointer'
                            >
                                <li className='text-red-500'>- Team</li>
                                <li>- Cheaf Single Details</li>
                            </ul>
                        </li>
                        <li className='hover:bg-gray-900 ml-[-16px] pl-4 py-1 rounded-sm'>Customer Review</li>
                        <li className='hover:bg-gray-900 ml-[-16px] pl-4 py-1 rounded-sm'>Upload Menu</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <p className='text-xs text-red-500'>AUTHENTICATION PAGES</p>
                    <ul className='text-[10px] flex flex-col gap-y-3 pl-4 cursor-pointer'>
                        <li className='hover:bg-gray-900 ml-[-16px] pl-4 py-1 rounded-sm'>Login</li>
                        <li className='hover:bg-gray-900 ml-[-16px] pl-4 py-1 rounded-sm'>Register Now</li>
                        <li className='hover:bg-gray-900 ml-[-16px] pl-4 py-1 rounded-sm'>Lock Screen</li>
                        <li className='hover:bg-gray-900 ml-[-16px] pl-4 py-1 rounded-sm'>Recover Password</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col gap-y-2 justify-center items-center'>
                <div className="flex gap-2 text-xs text-blue-500 font-semibold">
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <RiLinkedinFill />
                    <FaGooglePlusG className="text-red-500" />
                </div>
                <p className='text-[8px]'>
                    &copy; 2018 <span className='text-red-500'>Tomatus</span>. All Right Reserved
                </p>
            </div>
        </div>
    )
}

export default Sidebar;