import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";

interface PropsType {
    id:string
    img:string;
    category:string;
    title:string;
    price:number;
}

const ProductCard = ({id,img,category,title,price}:PropsType)=>{
    const dispatch = useAppDispatch();

    const addProductTocart = () =>{
        const Payload = {
            id,
            img,
            title,
            price,
            quantity:1,
        };

        dispatch(addToCart(Payload));
        makeToast("Added to cart");
    };

    return(
        <div className="border border-gray-200">
            <div className="text-center border-b border-gray-200">
                <img src={img} width={400} height={400} alt={title} className="inline-block" />
            </div>

            <div className="px-8 py-4">
                <p className="text-gray-500 text-[14px] font-medium">{category}</p>
                <h2 className="font-medium">{title}</h2>

                <div className="mt-3 flex text-[#ffB21D] items-center">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <p className="text-gray-600 text-[14px] ml-2">(3 Review)</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <h2 className="font-medium text-accept text-xl">Rs.{price}</h2>
                    <div className="flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accept"
                    onClick={addProductTocart}>
                        <AiOutlineShoppingCart/> Add To Cart
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard