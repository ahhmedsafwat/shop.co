import { useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const DressStyle = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="Filter-item" onClick={handleClick}>
        <h3 className="font-satoshiBold text-lg">DressStyle</h3>
        <LuChevronRight
          className={`${click ? "-rotate-90" : "rotate-0"} transition`}
        />
      </div>
      {click && (
        <>
          <div className="Filter-item">
            <h3 className="font-satoshi500">
              <Link to={"/shop.co/Categories/casual"}>Casual</Link>
            </h3>
            <LuChevronRight />
          </div>
          <div className="Filter-item">
            <h3 className="font-satoshi500">
              <Link to="/shop.co/Categories/jeans">Jeans</Link>
            </h3>
            <LuChevronRight />
          </div>
          <div className="Filter-item">
            <Link to="/shop.co/Categories/shoes">Shoes</Link>
            <LuChevronRight />
          </div>
          <div className="Filter-item">
            <Link to="/shop.co/Categories/gym">GYM</Link>
            <LuChevronRight />
          </div>
        </>
      )}
    </>
  );
};

export default DressStyle;
