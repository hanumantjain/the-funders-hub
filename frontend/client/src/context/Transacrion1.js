// import React, {useEffect, useState } from 'react';
// import {ethers} from 'ethers';
// import {contractABI, contractAddress} from '../utils/constants1';

// export const Transaction1 = React.createContext();

// const {ethereum} = window;

// const getEthereumContract = () => {
//     const provider = new ethers.providers.Web3Provider(ethereum);
//     const signer = provider.getSigner();
//     const transactionContract = new ethers.Contract(contractAddress,contractABI,signer)
    
//     // console.log(
//     //     {
//     //         provider,
//     //         signer,
//     //         transactionContract
//     //     }
//     // )
//    return transactionContract;
// } 

// export const TransactionProvider = ({ children }) => {

//     const getSummary = async () => {
//         try {
//             if (ethereum) {
//                 const transactionContract = getEthereumContract();
//                 const summary1 = await transactionContract.getSummary()
//                //console.log(deployedAddress)
//                 const summary = await transactionContract.createStartUp()
//                 const structuredTransactions = summary1.map((transaction) => ({
//                     addressTo: transaction.receiver,
//                     addressFrom: transaction.sender,
//                     startupName: transaction.startupName,
//                     description: transaction.description,
//                     url: transaction.url,
//                     //timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
//                     message: transaction.message,
//                     keyword: transaction.keyword,
//                     //amount: parseInt(transaction.amount._hex) / (10 ** 18)
//                   }));
          
//                   console.log(Object.values(structuredTransactions));
//             } else {
//               console.log("Ethereum is not present");
//             }
//           } catch (error) {
//             console.log(error);
//           }
//     }

//     useEffect(()=> {
//         //getSummary();
//         //checkIfTransactionsExists();
//     },[]);

//     return(
//         <TransactionContext.Provider value = {{getSummary}}>
//             {children}
//         </TransactionContext.Provider>
//     );
// }
