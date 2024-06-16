import { removeFromCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react';
import { RxCross1 } from 'react-icons/rx';

interface PropsType{
    id:string;
    img:string;
    title:string;
    price:number;
    quantity:number;
}

const CartProduct: React.FC<PropsType>=({
    id,
    img,
    title,
    price,
    quantity,
})=>{
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img src={img} alt={title} className="h-[80px]" />
                <div className="space-y-2">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-gray-600 text-[14px]">
                        {quantity} X ${price}.00
                    </p>
                </div>
            </div>

            <RxCross1
            className='cursor-pointer'
            onClick={()=>dispatch(removeFromCart(id))}
            />
        </div>
    )
}

export default CartProduct
