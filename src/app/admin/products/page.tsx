import ProductForm from "@/components/admin-panel/ProductForm";

const products = () => {
  return (
    //h-[calc(100vh-96px)]
    <div className="h-[calc(100vh-38px)] w-full grid place-items-center overflow-y-auto">
        <div className="bg-white w-[300px] rounded p-4">
            <ProductForm/>
        </div>
    </div>
  );
}

export default products;

