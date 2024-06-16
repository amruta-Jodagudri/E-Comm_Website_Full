'use client'
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { FormEvent, useState } from "react";

interface IPayload {
    imgSrc: null | string;
    filekey:null | string;
    name:string;
    category:string;
    price:string;
}

const ProductForm = () => {

    const [payload, setpayload] = useState<IPayload>({
        imgSrc:null,
        filekey:null,
        name:"",
        category:"",
        price:""
    });

    const dispatch = useAppDispatch();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));

        console.log("Submitting payload:", payload);

        try {
            const response = await fetch('/api/addproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            // if (!response.ok) {
            //     const errorData = await response.json();
            //     throw new Error(`Error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
            // }

            const resData = await response.json();
            console.log("Response:", resData);
            makeToast("Product added Successfully");
            setpayload({
                imgSrc: null,
                filekey: null,
                name: "",
                category: "",
                price: ""
            });
        } catch (err) {
            console.error("Error:", err);
        } finally {
            dispatch(setLoading(false));
        }
        //     console.log("Response:", res);
        //     makeToast("Product added Successfully");
        //     setPayload({
        //         imgSrc: null,
        //         filekey: null,
        //         name: "",
        //         category: "",
        //         price: ""
        //     });
        // })
        // .catch((err) => {
        //     console.error("Error:", err);
        //     if (err.response) {
        //         console.error("Response data:", err.response.data);
        //         console.error("Response status:", err.response.status);
        //         console.error("Response headers:", err.response.headers);
        //     }
        // })
        // .finally(() => {
        //     dispatch(setLoading(false));
        // });
    };

    // const handleSubmit = ((e:FormEvent) =>{
    //     e.preventDefault();
    //     dispatch(setLoading(true))
    //     axios.post('/api/add_product',payload).then((res)=>{
    //         console.log(res);
    //         makeToast("Product added Successfully");
    //         setpayload({
    //             imgSrc:null,
    //             filekey:null,
    //             name:"",
    //             category:"",
    //             price:""
    //         })
    //     })
    //     .catch((err)=>console.log(err))
    //     .finally(()=>dispatch(setLoading(false)));
    // });
    
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Image src={payload.imgSrc ? payload.imgSrc : "/Placeholder.jpg"} className="max-h-[300px] w-auto object-contain round" width={800} height={500} alt="product_image">
            </Image>
            <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res)=>{
                console.log(res);

                setpayload({
                    ...payload,
                    imgSrc:res[0]?.url,
                    filekey:res[0]?.key,
                })
            }}
            onUploadError={(error:Error)=>{
                console.log(`ERROR! ${error}`);
            }}
            />

            <div>
                <label className="block ml-1">Product Name</label>
                <input type="text" className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md" 
                value={payload.name}
                onChange={(e)=>setpayload({...payload,name:e.target.value})}
                required
                />
            </div>
            <div>
                <label className="block ml-1">Product Category</label>
                <input type="text" className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md" 
                value={payload.category}
                onChange={(e)=>setpayload({...payload,category:e.target.value})}
                required
                />
            </div>
            <div>
                <label className="block ml-1">Product Price</label>
                <input type="text" className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md" 
                value={payload.price}
                onChange={(e)=>setpayload({...payload,price:e.target.value})}
                required
                />
            </div>
            <div className="flex justify-end">
                <button className="bg-pink text-white px-8 py-2 rounded-md">Add</button>
            </div>
        </form>
    )
}

export default ProductForm



// 'use client'
// import { setLoading } from "@/redux/features/loadingSlice";
// import { useAppDispatch } from "@/redux/hooks";
// import { makeToast } from "@/utils/helper";
// import { UploadButton } from "@/utils/uploadthing";
// import Image from "next/image";
// import { FormEvent, useState } from "react";

// interface IPayload {
//     imgSrc: null | string;
//     filekey: null | string;
//     name: string;
//     category: string;
//     price: string;
// }

// const ProductForm = () => {

//     const [payload, setPayload] = useState<IPayload>({
//         imgSrc: null,
//         filekey: null,
//         name: "",
//         category: "",
//         price: ""
//     });

//     const dispatch = useAppDispatch();

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         dispatch(setLoading(true));

//         console.log("Submitting payload:", payload);

//         try {
//             const response = await fetch('/api/add_product', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(payload)
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(`Error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
//             }

//             const resData = await response.json();
//             console.log("Response:", resData);
//             makeToast("Product added Successfully");
//             setPayload({
//                 imgSrc: null,
//                 filekey: null,
//                 name: "",
//                 category: "",
//                 price: ""
//             });
//         } catch (err) {
//             console.error("Error:", err);
//         } finally {
//             dispatch(setLoading(false));
//         }
//         // axios.post('/api/add_product', payload).then((res) => {
//         //     console.log("Response:", res);
//         //     makeToast("Product added Successfully");
//         //     setPayload({
//         //         imgSrc: null,
//         //         filekey: null,
//         //         name: "",
//         //         category: "",
//         //         price: ""
//         //     });
//         // })
//         // .catch((err) => {
//         //     console.error("Error:", err);
//         //     if (err.response) {
//         //         console.error("Response data:", err.response.data);
//         //         console.error("Response status:", err.response.status);
//         //         console.error("Response headers:", err.response.headers);
//         //     }
//         // })
//         // .finally(() => {
//         //     dispatch(setLoading(false));
//         // });
//     };

//     return (
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//             <Image 
//                 src={payload.imgSrc ? payload.imgSrc : "/Placeholder.jpg"} 
//                 className="max-h-[300px] w-auto object-contain round" 
//                 width={800} 
//                 height={500} 
//                 alt="product_image" 
//             />
//             <UploadButton
//                 endpoint="imageUploader"
//                 onClientUploadComplete={(res) => {
//                     console.log("Upload response:", res);

//                     setPayload({
//                         ...payload,
//                         imgSrc: res[0]?.url,
//                         filekey: res[0]?.key,
//                     });
//                 }}
//                 onUploadError={(error: Error) => {
//                     console.error(`Upload error: ${error}`);
//                 }}
//             />

//             <div>
//                 <label className="block ml-1">Product Name</label>
//                 <input 
//                     type="text" 
//                     className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md" 
//                     value={payload.name}
//                     onChange={(e) => setPayload({ ...payload, name: e.target.value })}
//                     required
//                 />
//             </div>
//             <div>
//                 <label className="block ml-1">Product Category</label>
//                 <input 
//                     type="text" 
//                     className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md" 
//                     value={payload.category}
//                     onChange={(e) => setPayload({ ...payload, category: e.target.value })}
//                     required
//                 />
//             </div>
//             <div>
//                 <label className="block ml-1">Product Price</label>
//                 <input 
//                     type="text" 
//                     className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md" 
//                     value={payload.price}
//                     onChange={(e) => setPayload({ ...payload, price: e.target.value })}
//                     required
//                 />
//             </div>
//             <div className="flex justify-end">
//                 <button className="bg-pink text-white px-8 py-2 rounded-md">Add</button>
//             </div>
//         </form>
//     );
// }

// export default ProductForm;
