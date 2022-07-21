import React, {useEffect, useState } from 'react';
import {ethers} from 'ethers';
import {contractABI, contractAddress} from '../utils/constants';
import {contractABI1} from '../utils/constants1';
import { useContext } from 'react';


export const TransactionContext = React.createContext();

const {ethereum} = window;


//fetching ethereum contract

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer)
    
    // console.log(
    //     {
    //         provider,
    //         signer,
    //         transactionContract
    //     }
    // )
   return transactionContract;
} 

// const getEthereumContract1 = () => {

//     const {getDeployedStartup} = useContext(TransactionContext);
//     const provider = new ethers.providers.Web3Provider(ethereum);
//     const signer = provider.getSigner();
//     const transactionContract = new ethers.Contract({deployedAddress},contractABI1,signer)
    
//     // console.log(
//     //     {
//     //         provider,
//     //         signer,
//     //         transactionContract
//     //     }
//     // )
//    return transactionContract;

// }

export const TransactionProvider = ({ children }) => {

    const [currentAccount, setCurrentAcccount] = useState('')
    const [formData, setFormData] = useState({addressTo:"", email:"", description:"",url:"", amount:""});
    const [formDataRequest, setFormDataRequest] = useState({requestDescription:"", amount:"", receiverAddress:""});
    const [formDataSend, setFormDataSend] = useState({amount:""});
    const [isloading, setIsLoading] = useState(false)
    const [transactionCount, settransactionCount] = useState(localStorage.getItem('transactionCount'));


    const handleChange = (e, name) =>{
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value}))
        setFormDataRequest((prevState) => ({ ...prevState, [name]: e.target.value}))
        setFormDataSend((prevState) => ({ ...prevState, [name]: e.target.value}))
    }

    const getDeployedStartup = async () => {
        try {
            if (ethereum) {
                const transactionContract = getEthereumContract();
                const deployedAddress = await transactionContract.getDeployedStartup()
                console.log(deployedAddress);
                //wconst summary = await transactionContract.createStartUp()
                // const structuredTransactions = deployedAddress.map((transaction) => ({
                //     addressTo: transaction.receiver,
                //     addressFrom: transaction.sender,
                //     startupName: transaction.startupName,
                //     description: transaction.description,
                //     url: transaction.url,
                //     //timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                //     message: transaction.message,
                //     keyword: transaction.keyword,
                //     //amount: parseInt(transaction.amount._hex) / (10 ** 18)
                //   }));
          
                //   console.log(Object.values(structuredTransactions));
            } else {
              console.log("Ethereum is not present");
            }
          } catch (error) {
            console.log(error);
          }
    }    

    // const getSummary = async () => {
    //     try {
    //         if(ethereum){

    //             const transactionContract = getEthereumContract();

    //             const summary = await transactionContract.getSummary(email,startupName,amount,description,url,sender,reciever,target)

    //             console.log(summary)
    //         }else{
    //             console.log("Ethereum is not present");
    //         }
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const checkIfWalletIsConnected = async () => {
        try{
            if(!ethereum) return alert("Please Install MetaMask Wallet");

            const accounts = await ethereum.request({ method : 'eth_requestAccounts' });
    
            if(accounts.length){
                setCurrentAcccount(accounts[0]);
                
                getDeployedStartup()

                // getSummary()

            }else{
                console.log("not accounts found")
            }
            console.log(accounts);
        }catch(error){
            console.log(error)
        }
        

    }

    const connectWallet = async () => {
        try{
            console.log("hello")
            if(!ethereum) return alert("Please Install MetaMask Wallet")
            const accounts = await ethereum.request({ method : 'eth_requestAccounts'});
            setCurrentAcccount(accounts[0]);
        }catch(error){
            console.log(error);
            throw new Error("No Ehtereum object")
        }
    };

    const requestEther = async () =>{
        try {
            if(ethereum){
                const{requestDescription, amount, receiverAddress} = formDataRequest;
                const transactionContract = await getEthereumContract();
                const parsedAmount = ethers.utils.parseEther(amount)

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: currentAccount,
                    to: receiverAddress,
                    gas: "0x5208", //0.000021 ether 
                    value: parsedAmount._hex,
                }]
            })

            const transactionHash = await transactionContract.createRequest(requestDescription, amount, receiverAddress)
            setIsLoading(true)
            console.log(`Loading - ${transactionHash.hash}`)
            await transactionHash.wait()
            setIsLoading(false)
            console.log(`Success - ${transactionHash.hash}`)
             getEthereumContract();

            }else{
                console.log("No Ehtereum Object")
            }
        } catch (error) {
            console.log(error);
           // throw new Error("No Ethereum object")
        }
    }

    const sendEther = async () =>{
        try {
            if(ethereum){
                const{amount} = formDataSend;
                const transactionContract = await getEthereumContract();
                const parsedAmount = ethers.utils.parseEther(amount)

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: currentAccount,
                    to: '0xF3DEd93DF75eB8267d159308C15c9DadDb989652',
                    gas: "0x5208", //0.000021 ether 
                    value: parsedAmount._hex,
                }]
            })

            const transactionHash = await transactionContract.createRequest(amount)
            setIsLoading(true)
            console.log(`Loading - ${transactionHash.hash}`)
            await transactionHash.wait()
            setIsLoading(false)
            console.log(`Success - ${transactionHash.hash}`)
             getEthereumContract();

            }else{
                console.log("No Ehtereum Object")
            }
        } catch (error) {
            console.log(error);
           // throw new Error("No Ethereum object")
        }
    }

    const sendTransaction = async () => {
        try {
            if(ethereum) {
            const {startupName, email, description,url, amount} = formData;
            const transactionContract = await getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount)

            await ethereum.request({
                method: "eth_requestAccounts",
                params: [{
                    from: currentAccount,
                    gas: "0x5208", //0.000021 ether 
                    value: parsedAmount._hex,
                }]
            })

            const transactionHash = await transactionContract.createStartUp()
            setIsLoading(true)
            console.log(`Loading - ${transactionHash.hash}`)
            await transactionHash.wait()
            setIsLoading(false)
            console.log(`Success - ${transactionHash.hash}`)

            // const transactionCount = await transactionCount.getTransactionCount()
            // settransactionCount(transactionCount.toNumber())
        } else
        console.log("No Ehtereum Object")
        }catch (error) {
            console.log(error);
            throw new Error("No Ethereum object")
        }
    }

    

    useEffect(()=> {
        checkIfWalletIsConnected();
        //checkIfTransactionsExists();
    },[]);

    return(
        <TransactionContext.Provider value = {{connectWallet,getDeployedStartup, currentAccount, formData, setFormData, sendTransaction, handleChange, requestEther,sendEther, formDataRequest,formDataSend, setFormDataRequest}}>
            {children}
        </TransactionContext.Provider>
    );
}
