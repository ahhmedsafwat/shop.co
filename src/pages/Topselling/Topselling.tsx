import ProductSkeleton from "../../components/loader/ProductSkeleton";
import { Product, useFetchData } from "../../helper/useFectchApi";
import Button from "../../components/utilities/button";
import { Link } from "react-router-dom";
import ProductItem from "../../components/Productitem/ProductItems";
import { useDragScroll } from "../../components/utilities/useDragProducts";
const Topselling = () => {
  const { fakeData, isPending, error } = useFetchData<Product[]>(
    `http://localhost:8000/products?_start=5&_end=9`,
    "topseller"
  );

  const [ref] = useDragScroll();

  if (error) return `There was an error : ${error.message}`;

  return (
    <div className=" py-16 px-20 xLarge:px-5 medium:px-8 small:px-4">
      <h1 className="text-center text-5xl medium:text-4xl small:text-3xl  font-secondary">
        Top Selling
      </h1>
      {isPending && (
        <div className="flex justify-between items-center py-16 xLarge:px-6 px-20 medium:px-8 medium:pt-28 small:pt-40">
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
      )}
      {fakeData && (
        <div
          className="grid grid-cols-4 large:grid-cols-2 gap-[1%] small:flex mt-14 mb-8 overflow-hidden place-items-center"
          ref={ref}
        >
          <ProductItem products={fakeData} />
        </div>
      )}
      <Link to={"Categories"} className="w-fit block mx-auto">
        <Button
          className="w-fit small:w-full mx-auto mt-6 py-4 px-20 small:py-2 border rounded-[62px] font-satoshi500 hover:text-white hover:bg-black "
          text={"view All"}
        ></Button>
      </Link>
    </div>
  );
};

export default Topselling;
