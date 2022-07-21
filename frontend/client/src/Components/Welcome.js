import React from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TransactionContext} from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Welcome = () => {

  const {currentAccount, getDeployedStartup} = useContext(TransactionContext);

  return (
    <div className="flex w-full my-32 md:justify-start justify-center items-center">
      <div className=" w-full flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-48 sm:w-80 w-full my-5 eth-card white-glassmorphism hover:animate-bounce">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white text-left text-sm">{shortenAddress(currentAccount)}</p>
                <p className="text-white font-semibold text-lg">Ethereum</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col text-center md:text-left mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            Investment &#38; Funding using the powers of Crypto &#38; Blockchain
          </h1>
          
          <button
            type="button"
            className="md:w-80 w-full flex flex-row justify-center items-center mt-10 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semibold">
              <Link to="/createstartup">Create Start Up</Link>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
