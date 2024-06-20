import { useAppSelector } from "@/redux/hooks"
import { Dispatch, SetStateAction } from "react"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"

interface PropsType{
    setShowcart:Dispatch<SetStateAction<boolean>>
}

const Navbar = ({setShowcart}:PropsType) => {

    const cartCount = useAppSelector((state)=>state.cartReducer.length)

    return (
        <div className="pt-4 bg-white top-0 sticky">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="text-4xl font-bold">SHOP.</div>
                    <div className="lg:flex hidden w-full max-w-[500px]">
                        <input type="text" className="border-2 border-accept px-6 py-2 w-full" placeholder="Search For products..." />
                        <div className="bg-accept text-white text-[26px] grid place-item center px-4">
                            <BsSearch className="mt-2"/>
                        </div>
                    </div>
                    <div className="flex gap-4 md:gap-8 item-center">
                        <div className="md:flex hidden gap-3">
                            <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-item-center">
                                <AiOutlineUser size={45}/>
                            </div>
                            <div>
                                <p className="text-gray-500">Hello,Sign In</p>
                                <p className="font-medium">Your Account</p>
                            </div>
                        </div>
                        <div className="text-gray-500 text-[32px] relative cursor-pointer mt-4" onClick={()=>setShowcart(true)}>
                            <AiOutlineShoppingCart />
                            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[20px] h-[20px] rounded-full text-white text-[14px] grid place-item-center">
                                {cartCount}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-200 pt-4"></div>
            </div>
        </div>
    )
}

export default Navbar
