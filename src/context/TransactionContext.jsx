import { useEffect, useState, createContext } from "react";
import { useAlert } from "react-alert";

import { ethers } from "ethers";

import { contractABI, contractAdress } from "../utils/constants";

export const TransactionContext = createContext();

let { ethereum } = window;

const getContractRead = () => {
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const contract = new ethers.Contract(contractAdress, contractABI, provider);
        return contract;
    }
};
const getContractWrite = () => {
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAdress, contractABI, signer);
        return contract;
    }
};

export const TransactionProvider = ({ children }) => {
    const [balance, setBalance] = useState("");
    const [balance1, setBalance1] = useState("");
    const [balance2, setBalance2] = useState("");
    const [contractName, setContractName] = useState("");
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

    const handleStake = () => {
        let reciept = getContractWrite().stake("" + stakeFormAmount * Math.pow(10, 9));
        reciept.then((res) => {
            console.log(res);
        });
    };
    const handleUnstake = () => {
        let reciept = getContractWrite().unstake("" + unstakeFormAmount * Math.pow(10, 9));
        reciept.then((res) => {
            console.log(res);
        });
    };

    const checkIfWalletIsConnected = async () => {
        try {
            let accounts;
            if (ethereum) {
                accounts = await ethereum.request({ method: "eth_accounts" });
                const balance = await getContractRead().balanceOf(accounts[0]);
                const balance1 = await getContractRead().totalBalanceOf(accounts[0]);
                const balance2 = await getContractRead().stBalanceOf(accounts[0]);
                const name = await getContractRead().name();
                const convertedbalance = ethers.utils.formatUnits(balance, 9);
                const convertedbalance1 = ethers.utils.formatUnits(balance1, 9);
                const convertedbalance2 = ethers.utils.formatUnits(balance2, 9);

                setContractName(name);
                setBalance(convertedbalance);
                setBalance1(convertedbalance1);
                setBalance2(convertedbalance2);
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
                });
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            const balance = await getContractRead().balanceOf(accounts[0]);
            const balance1 = await getContractRead().totalBalanceOf(accounts[0]);
            const balance2 = await getContractRead().stBalanceOf(accounts[0]);
            const name = await getContractRead().name();
            const convertedBalance = ethers.utils.formatUnits(balance, 9);
            const convertedbalance1 = ethers.utils.formatUnits(balance1, 9);
            const convertedbalance2 = ethers.utils.formatUnits(balance2, 9);

            setContractName(name);
            setBalance(convertedBalance);
            setBalance1(convertedbalance1);
            setBalance2(convertedbalance2);
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
                handleStake,
                handleUnstake,
                stakeFormAmount,
                unstakeFormAmount,
                balance,
                balance1,
                balance2,
                contractName,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};
