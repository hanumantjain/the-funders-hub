import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TransactionContext} from "../context/TransactionContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="mt-2 w-11/12 rounded-sm p-2 outline-none bg-transparent text-white border-none text-lg white-glassmorphism"
  />
);

const ViewStartUpPage = () => {

  const {currentAccount,formDataSend,sendEther,handleChange} = useContext(TransactionContext);

  const handleSubmit = (e) => {
    console.log('this')
    const {amount} = formDataSend;
    e.preventDefault();

    if(!amount) return;
    sendEther();
  }

  return (
    <div className="text-white md:mx-20 mx-5 my-28 flex md:flex-row flex-col justify-center gap-x-24 gap-y-12">
      <div className="flex flex-col flex-1 gap-y-12">
        <h1 className="md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-500">
          91SquareFeet
        </h1>
        <p className="md:justify-center justify-start items-center font-thin leading-8">
          Online shopping has seen frenzied demand in the pandemic years as
          consumers prefer it for the sake of safety and convenience. But it is
          premature to write off brick-and-mortar retail in favour of ecommerce.
          Retail is now undergoing a tremendous transformation and entering the
          hybrid/omnichannel stage where offline will remain a key growth
          driver. Hence, setting up traditional retail stores in sync with the
          new-age mixed commerce has become the need of the hour. Launched in
          2018, Gurugram-based 91SquareFeet helps retail brands to build and
          maintain their physical stores in India without big teams. It
          currently hosts 20+ clients such as Van Heusen, Philips, CEAT,
          Pepperfry, Chai Point and more.
        </p>
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism">
          <p className="font-thin md:text-base text-sm mb-2">
            Wallet Address of StartUp Creator
          </p>
          <p className="font-semibold md:text-lg text-sm">
            {currentAccount}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-y-12">
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism gap-y-2">
          <p className="font-thin text-base">Startup Balance</p>
          <p className="text-2xl font-thin">
            <span className="font-normal text-orange-500">5.85 Ether </span>
            ($44663.62)
          </p>
          <p className="text-base">target of 15 Ether ($154464.86)</p>
        </div>
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism">
          <h1 className="font-normal text-2xl text-orange-500 mb-6">
            Contribute Now!
          </h1>
          <p className="font-thin text-base">
            Amount in Ether you want to contribute
          </p>
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={handleChange}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="text-black font-semibold w-11/12 mt-2 border-[1px] p-2 border-[#3d4f7c] rounded cursor-pointer bg-gradient-to-r from-green-500 to-green-300 transition duration-[2s] ease-in-out hover:bg-rose-600"
          >
            Contribute Here...
          </button>
        </div>
        <div className="py-5 md:pl-10 pl-4 flex flex-col justify-start blue-glassmorphism">
          <Link to="/createrequest">
            <button
              type="button"
              // onClick={handleSubmit}
              className="text-black font-semibold w-11/12 mt-2 border-[1px] p-2 border-[#3d4f7c] rounded cursor-pointer bg-gradient-to-r from-orange-500 to-amber-500 transition duration-[2s] ease-in-out hover:bg-rose-600"
            >
              View Withdrawal Request
            </button>
          </Link>
          <p className="w-11/12 mt-4">
            * You can Request these funds for further uses and creater as well
            as investor have track of funds :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewStartUpPage;
