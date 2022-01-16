import { useEffect, useState, createContext } from "react";
import { useAlert } from "react-alert";

// import { ethers } from "ethers";

// import { contractABI, contractAdress } from "../utils/constants";

export const TransactionContext = createContext();

let { ethereum } = window;

// const getContract = () => {
//     if (ethereum) {
//         const provider = new ethers.providers.Web3Provider(ethereum);
//         const signer = provider.getSigner();
//         const transactionContract = new ethers.Contract(contractAdress, contractABI, signer);
//     }
// };
// getContract();

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [stakeFormAmount, setStakeFormAmount] = useState("");
    const [unstakeFormAmount, setUnstakeFormAmount] = useState("");

    const alert = useAlert();

    const handleStakeChange = (e) => {
        setStakeFormAmount(e.target.value);
    };

    const handleUnstakeChange = (e) => {
        setUnstakeFormAmount(e.target.value);
    };

    const handleSubmit = () => {};

    const checkIfWalletIsConnected = async () => {
        try {
            let accounts;
            if (ethereum) {
                accounts = await ethereum.request({ method: "eth_accounts" });
            }

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log("No account found");
            }
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };

    const connectWallet = async () => {
        try {
            if (!ethereum) {
                alert.show("Metamask is not installed", {
                    content: "Please install metamask ",
                    link: "metamask.io",
                    href: "https://metamask.io/",
                    timeout: 5000,
                    transition: "scale",
                });
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });

            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();

        function handleDisconnect(accounts) {
            window.location.reload();
        }
        ethereum?.on("accountsChanged", handleDisconnect);
    }, []);

    return (
        <TransactionContext.Provider
            value={{
                connectWallet,
                currentAccount,
                handleStakeChange,
                handleUnstakeChange,
                handleSubmit,
                stakeFormAmount,
                unstakeFormAmount,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};
