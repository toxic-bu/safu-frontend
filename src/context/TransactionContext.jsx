import { useEffect, useState, createContext } from "react";
import { useAlert } from "react-alert";

import { ethers } from "ethers";

import { contractABI, contractAdress } from "../utils/constants";

export const TransactionContext = createContext();

let { ethereum } = window;

export const TransactionProvider = ({ children }) => {
    const [contractInstance, setContractInstance] = useState({});
    const [rvBalance, setRvBalance] = useState("");
    const [totalBalance, setTotalBalance] = useState("");
    const [stBalance, setStBalance] = useState("");
    const [contractName, setContractName] = useState("");
    const [currentAccount, setCurrentAccount] = useState("");
    const [stakeFormAmount, setStakeFormAmount] = useState("");
    const [unstakeFormAmount, setUnstakeFormAmount] = useState("");

    const alert = useAlert();

    const handleStake = () => {
        let reciept = contractInstance.contractSigner.stake("" + stakeFormAmount * Math.pow(10, 9));
        reciept.then((res) => {
            console.log(res);
            setStakeFormAmount("");
        });
    };
    const handleUnstake = () => {
        let reciept = contractInstance.contractSigner.unstake("" + unstakeFormAmount * Math.pow(10, 9));
        reciept.then((res) => {
            console.log(res);
            setUnstakeFormAmount("");
        });
    };

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) {
                console.log("No account found");
                return;
            }

            const accounts = await ethereum.request({ method: "eth_accounts" });
            setCurrentAccount(accounts[0]);
            console.log("done checkIfWalletIsConnected");
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
                return;
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);

            console.log("done connectWallet");
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };

    const handleSetAllStake = () => {
        setStakeFormAmount(Math.floor(Number(rvBalance)));
    };
    const handleSetAllUnstake = () => {
        setUnstakeFormAmount(Math.floor(Number(stBalance)));
    };
    useEffect(() => {
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contractProvider = new ethers.Contract(contractAdress, contractABI, provider);
            const contractSigner = new ethers.Contract(contractAdress, contractABI, signer);

            setContractInstance({ contractSigner, contractProvider, provider });

            ethereum.on("accountsChanged", handleDisconnect);

            console.log("done  setContractInstance useEffect");
        }

        checkIfWalletIsConnected();

        function handleDisconnect() {
            window.location.reload();
        }
        return () => {
            ethereum.removeListener("accountsChanged", handleDisconnect);
        };
    }, []);

    useEffect(() => {
        const getBalances = async () => {
            if (currentAccount) {
                const balance = await contractInstance.contractProvider.balanceOf(currentAccount);
                const balance1 = await contractInstance.contractProvider.totalBalanceOf(currentAccount);
                const balance2 = await contractInstance.contractProvider.stBalanceOf(currentAccount);
                const name = await contractInstance.contractProvider.name();
                const convertedbalance = ethers.utils.formatUnits(balance, 9);
                const convertedbalance1 = ethers.utils.formatUnits(balance1, 9);
                const convertedbalance2 = ethers.utils.formatUnits(balance2, 9);
                setContractName(name);
                setRvBalance(convertedbalance);
                setTotalBalance(convertedbalance1);
                setStBalance(convertedbalance2);
                console.log("done getBalances useEffect");
            }
        };
        getBalances();

        const interval = setInterval(() => {
            getBalances();
            console.log("did update 10sec");
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [currentAccount, contractInstance]);

    useEffect(() => {}, [contractInstance]);
    return (
        <TransactionContext.Provider
            value={{
                connectWallet,
                currentAccount,
                setStakeFormAmount,
                setUnstakeFormAmount,
                handleSetAllUnstake,
                handleSetAllStake,
                handleStake,
                handleUnstake,
                stakeFormAmount,
                unstakeFormAmount,
                rvBalance,
                totalBalance,
                stBalance,
                contractName,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};
