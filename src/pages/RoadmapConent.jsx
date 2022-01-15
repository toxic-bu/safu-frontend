import React from "react";

export const RoadmapConent = () => {
    return (
        <div className="text-md text-white flex  justify-center ">
            <div className="blue-glassmorphism md:my-36 mx-6 my-12 md:p-12 p-4">
                <h1>2021</h1>
                <br />
                <h2>Q3</h2>
                <ul className="list-disc list-inside w-full ">
                    <li>Creation of profiles for the community</li>
                    <li>Website launch</li>
                    <li>Development of a token contract for the application ecosystem</li>
                    <li>Launch and testing of a contract for a token on testnet</li>
                    <li>Launch and testing of the liquidity blocking contract on the testnet</li>
                    <li>Deploy a contract</li>
                    <li>Listing on Pancakeswap</li>
                    <li>Basic promotion</li>
                    <li>Basic listings (coingecko, coinhunt, coinsniper, etc.)</li>
                </ul>
                <br />
                <h2>Q4</h2>
                <ul className="list-disc list-inside">
                    <li>Development of a detailed structure of the ecosystem</li>
                    <li>Development of ecosystem modules</li>
                    <li>Testing modules in testnet</li>
                </ul>
                <br />
                <h1>2022</h1>
                <br />
                <h2>Q1</h2>
                <ul className="list-disc list-inside">
                    <li>Launch of ecosystem modules</li>
                    <li>Listings on major exchanges</li>
                </ul>
                <br />
                <h2>Q2</h2>
                <ul className="list-disc list-inside">
                    <li>Ecosystem expansion to other blockchains(KCS, ETH, Polygon, etc.)</li>
                </ul>
            </div>
        </div>
    );
};
