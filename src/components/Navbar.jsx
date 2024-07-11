import React from "react";
import  logo  from "../assets/grocekart.png";
import { BsBag, BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const userData = useSelector((store) => {
    return store.userAuthReducer.user;
  });

  const cartItem = useSelector((store) => {
    return store.cartReducer.cart;
  });

  let value = 0;
  let offerValue = 0;
  cartItem.map((el) => {
    offerValue += Number(el.price);
    return (value = value+Number(el.price2))
  })
  const finalAmount = offerValue;
  offerValue = value - offerValue;
  

  // console.log(cartItem,"dd");

  const id = userData?.uid;

  return (
    <>
      <div className="bg-[white] flex flex-row h-[80px] w-[100%] items-center justify-around md:justify-evenly">
        <div className="flex flex-row items-center justify-evenly">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-[24px] md:h-[36px] md:ml-7"
            />
          </Link>
          <div className="h-[30px] w-[3px] bg-[#c6c6c6b8] rounded-xl ml-4"></div>
          
          <div >
          <h2 className="text-black font-semibold text-[13px] md:text-[16px] lg:text-[20px] ml-4">Delivery in 10 min</h2>
          <h4 className="text-black font-semibold text-[10px] md:text-[9px] lg:text-[15px] ml-4">select Location </h4>
          </div>
        </div>
        <div>
          <input
            type="text"
            className="hidden md:flex md:w-[400px] lg:w-[800px] h-[50px]  rounded-lg px-8 border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder=" &#128269;  Search for vegetables"
          />
        </div>
        <BsSearch className='hidden sm:flex md:hidden text-white text-[20px]'/>
        {
          !id ? <Link to='/' className='text-black font-bold hidden sm:flex'><button className='hidden sm:flex bg-[#FF3269] text-white text-[10px] md:text-[16px] font-semibold px-4 md:px-9  rounded-lg lg:flex mr-1 h-[50px] items-center justify-center' >My Account</button></Link>
          :
          <Link to='/account' className='text-black font-semibold hidden sm:flex' >My Account</Link>
        }
        <Link to='/cart' >
        {
          cartItem.length==0?<button className='hidden sm:flex bg-[#FF3269] text-white text-[13px] md:text-[16px] font-semibold px-4 md:px-9  rounded-lg lg:flex mr-10 h-[50px] items-center justify-center'>
          <BsBag className='text-[24px] mr-3'/>My Cart
          </button>:
          <button className="hidden sm:flex bg-[#FF3269] text-white text-[13px] md:text-[16px] font-semibold px-4 md:px-9  rounded-lg lg:flex mr-10 h-[60px] items-center justify-center">
            <BsBag className="text-[19px] mr-3 " />
            <div className="h-[30px] w-[2px] bg-[#ffffff] mr-3"></div>
            <div className="md:flex hidden  flex-col gap-y-[1px]">
              <div className="font-medium">{cartItem.length} Items</div>
              <div></div>₹{finalAmount}
            </div>
          </button>
        }
        </Link>

        <BiUser className="flex sm:hidden text-white text-[20px] font-semibold cursor-pointer" />
      </div>
    </>
  );
};

export default Navbar;
