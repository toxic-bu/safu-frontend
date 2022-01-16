const commonStyles = `min-h-[70px] sm:min-w-[60px]
     px-2 sm:px-0 
     flex justify-center items-center
     border-[0.5px] border-gray-400
     text-sm font-light text-white`;

const Welcome = () => {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-16 py-12 px-4 items-center">
                <div className="justify-start flex-col text-center md:mr-5">
                    <h1 className="text-3xl  text-white text-gradient py-1 text-gradient">
                        SECURE ASSET
                        <br />
                    </h1>
                    <p className="mt-5 text-white font-light text-base text-gradient mx-5">
                        FACTORY FOR USERS WITH HYPER DEFLATIONARY REFLECTIVE TOKEN ECOSYSTEM. WELCOME TO A SPACE OF
                        SAFETY AND TRANQUILITY.
                    </p>
                    <div className="grid grid-cols-3   mt-10 mx-5">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
                        <div className={`${commonStyles}`}>Security</div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>BEP-20</div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
                        <div className={`${commonStyles}`}>Low fees</div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
                    </div>
                </div>
                {/* <div className="flex flex-col md:flex-row mf:flex-col items-center justify-around w-full mf:mt-0 mt-10 "></div> */}
            </div>
        </div>
    );
};

export default Welcome;
