'use client'

import Popup from "@/components/admin-panel/Popup";
import ProductRow from "@/components/admin-panel/ProductRow";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect, useState } from "react";

export interface IProduct {
    _id: string;
    imgSrc: string;
    filekey: string;
    name: string;
    price: string;
    category: string;
}

const Dashboard = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [updateTable, setUpdateTable] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch(setLoading(true));
            try {
                const response = await fetch('http://localhost:3000/api/get_products');
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data: IProduct[] = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchProducts();
    }, [updateTable, dispatch]);

    return (
        <div className="bg-white h-[calc(100vh-38px)] rounded-lg p-4">
            <h2 className="text-3xl">All Products</h2>
            <div className="mt-4 h-[calc(100vh-180px)] overflow-y-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-gray-500 border-t border-[#ececec]">
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Picture</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <ProductRow
                                key={product._id}
                                srNo={index + 1}
                                setOpenPopup={setOpenPopup}
                                setUpdateTable={setUpdateTable}
                                product={product}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            {openPopup && (
                <Popup setOpenPopup={setOpenPopup} setUpdatetable={setUpdateTable} />
            )}
        </div>
    );
}

export default Dashboard;
