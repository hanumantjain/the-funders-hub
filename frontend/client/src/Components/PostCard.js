import React from "react";
import { SiEthereum } from "react-icons/si";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TransactionContext} from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const PostCard = () => {
  const {deployedAddress, currentAccount} = useContext(TransactionContext);
  return (
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-28 my-20">
    <Link to={"/viewstartup"}>
      <div className="flex flex-col md:w-96 w-11/12 justify-center items-center border-2 border-white rounded-lg">
        <img
          src="https://source.unsplash.com/random/383x330/?blockchain,ether"
          className="rounded-t-lg"
        />
        <div className="flex flex-col text-white px-4 py-5 gap-y-2 gradient-bg-transactions">
          <p className="text-xl font-thin">
            <strong>StartUp Name</strong> : 91SquareFeet
          </p>
          <p className="text-xl font-thin">
            <strong>Email</strong> : hr@91squarefeet.com
          </p>
          <p className="text-xl font-thin">
            <strong>Description</strong> : Online shopping has seen frenzied
            demand in the pandemic years as consumers prefer it for the sake
            of safety and convenience.
          </p>
          <p className="text-xl font-thin">
            <strong>File URL</strong> : https://www.91squarefeet.com
          </p>
          <p className="flex items-center text-xl font-thin">
            <strong className="flex items-center">
              Target Amount (<SiEthereum />)
            </strong>
            : 15 ETH
          </p>
        </div>
      </div>
    </Link>

    <Link to={"/viewstartup"}>
    <div className="flex flex-col md:w-96 w-11/12 justify-center items-center border-2 border-white rounded-lg">
      <img
        src="https://source.unsplash.com/random/383x330/?blockchain,bitcoin"
        className="rounded-t-lg"
      />
      <div className="flex flex-col text-white px-4 py-5 gap-y-2 gradient-bg-transactions">
        <p className="text-xl font-thin">
          <strong>StartUp Name</strong> : Aarna Networks
        </p>
        <p className="text-xl font-thin">
          <strong>Email</strong> : hr@aarnanetworks.com
        </p>
        <p className="text-xl font-thin">
          <strong>Description</strong> : With the successful deployment of 5G
          and Edge computing in the near future, the existing cloud ecosystem
          will undergo a sea change.
        </p>
        <p className="text-xl font-thin">
          <strong>File URL</strong> : https://www.aarnanetworks.com
        </p>
        <p className="flex items-center text-xl font-thin">
          <strong className="flex items-center">
            Target Amount (<SiEthereum />)
          </strong>
          : 11 ETH
        </p>
      </div>
    </div>
    </Link>
    
<Link to={"/viewstartup"}>
<div className="flex flex-col md:w-96 w-11/12 justify-center items-center border-2 border-white rounded-lg">
      <img
        src="https://source.unsplash.com/random/383x330/?blockchain"
        className="rounded-t-lg"
      />
      <div className="flex flex-col text-white px-4 py-5 gap-y-2 gradient-bg-transactions">
        <p className="text-xl font-thin">
          <strong>StartUp Name</strong> : Arthan Finance
        </p>
        <p className="text-xl font-thin">
          <strong>Email</strong> : hr@arthanfinance.com
        </p>
        <p className="text-xl font-thin">
          <strong>Description</strong> : Sixty-five million MSMEs worldwide
          face a financing shortfall of $5.2 Tn every year, says an IFC
          report. The Indian scenario is no different.
        </p>
        <p className="text-xl font-thin">
          <strong>File URL</strong> : https://www.arthanfinance.com
        </p>
        <p className="flex items-center text-xl font-thin">
          <strong className="flex items-center">
            Target Amount (<SiEthereum />)
          </strong>
          : 9 ETH
        </p>
      </div>
    </div>
</Link>


    <div className="flex flex-col md:w-96 w-11/12 justify-center items-center border-2 border-white rounded-lg">
      <img
        src="https://source.unsplash.com/random/383x330/?blockchain"
        className="rounded-t-lg"
      />
      <div className="flex flex-col text-white px-4 py-5 gap-y-2 gradient-bg-transactions">
        <p className="text-xl font-thin">
          <strong>StartUp Name</strong> : Demo Name 1
        </p>
        <p className="text-xl font-thin">
          <strong>Email</strong> : example@info.com
        </p>
        <p className="text-xl font-thin">
          <strong>Description</strong> : He href attribute requires a valid
          value to be accessible. Provide a valid, navigable address as the
          href value.
        </p>
        <p className="text-xl font-thin">
          <strong>File URL</strong> : https://www.googlr.com
        </p>
        <p className="flex items-center text-xl font-thin">
          <strong className="flex items-center">
            Target Amount (<SiEthereum />)
          </strong>
          : 3 ETH
        </p>
      </div>
    </div>

    <div className="flex flex-col md:w-96 w-11/12 justify-center items-center border-2 border-white rounded-lg">
      <img
        src="https://source.unsplash.com/random/383x330/?blockchain"
        className="rounded-t-lg"
      />
      <div className="flex flex-col text-white px-4 py-5 gap-y-2 gradient-bg-transactions">
        <p className="text-xl font-thin">
          <strong>StartUp Name</strong> : Demo Name 1
        </p>
        <p className="text-xl font-thin">
          <strong>Email</strong> : example@info.com
        </p>
        <p className="text-xl font-thin">
          <strong>Description</strong> : He href attribute requires a valid
          value to be accessible. Provide a valid, navigable address as the
          href value.
        </p>
        <p className="text-xl font-thin">
          <strong>File URL</strong> : https://www.googlr.com
        </p>
        <p className="flex items-center text-xl font-thin">
          <strong className="flex items-center">
            Target Amount (<SiEthereum />)
          </strong>
          : 3 ETH
        </p>
      </div>
    </div>

    <div className="flex flex-col md:w-96 w-11/12 justify-center items-center border-2 border-white rounded-lg">
      <img
        src="https://source.unsplash.com/random/383x330/?blockchain"
        className="rounded-t-lg"
      />
      <div className="flex flex-col text-white px-4 py-5 gap-y-2 gradient-bg-transactions">
        <p className="text-xl font-thin">
          <strong>StartUp Name</strong> : Demo Name 1
        </p>
        <p className="text-xl font-thin">
          <strong>Email</strong> : example@info.com
        </p>
        <p className="text-xl font-thin">
          <strong>Description</strong> : He href attribute requires a valid
          value to be accessible. Provide a valid, navigable address as the
          href value.
        </p>
        <p className="text-xl font-thin">
          <strong>File URL</strong> : https://www.googlr.com
        </p>
        <p className="flex items-center text-xl font-thin">
          <strong className="flex items-center">
            Target Amount (<SiEthereum />)
          </strong>
          : 3 ETH
        </p>
      </div>
    </div>
  </div>
  );
};

export default PostCard;
