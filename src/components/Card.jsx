import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";

import ProfileImage from '../assets/Profile.jpeg';


const Card = () => {
    return (
        <div className="h-max w-[49.50%] md:w-[32.66%] lg:w-[19.20%] bg-gray-700 p-4 rounded-sm ">

            <div className="flex justify-end">
                <HiOutlineDotsVertical className="text-sm" />
            </div>

            <div className="flex flex-col gap-y-4 justify-center items-center text-center">

                <div className="flex flex-col justify-center items-center gap-y-1">
                    <img
                        src={ProfileImage}
                        alt="Profile"
                        className="w-10 h-10 object-cover rounded-full"
                    />
                    <p className="text-sm">Parsley Montana</p>
                    <p className="text-xs">Chef</p>
                </div>

                <p className="text-xs">
                    <span className="text-red-500">Special Dish: </span>Chill Chicken
                </p>

                <div className="flex gap-2 text-sm text-center cursor-pointer mb-4 mt-2">
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <RiLinkedinFill />
                </div>
            </div>
        </div>

    )
}

export default Card