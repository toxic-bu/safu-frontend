import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl ">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center  ${color}`}>{icon}</div>
        <div className="ml-5 flex flex-col justify-center">
            <h1 className=" text-white text-lg">{title}</h1>
            <p className="mt-2 text-white text-sm ">{subtitle}</p>
        </div>
    </div>
);

const Services = () => {
    return (
        <div className="flex w-full justify-center items-center  flex-col mf:flex-row">
            <div className="flex mf:flex-row flex-col items-center justify-between p-20 py-12 px-4">
                <div className="flex flex-col justify-start items-start ">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
                        Services that we
                        <br />
                        continue to improve
                    </h1>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center pb-10 mf:py-6">
                <ServiceCard
                    color="bg-[#2952e3]"
                    title="Security Guaranteed"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Security is guaranted. We always maintain privacy and mainting quality of our products."
                />
                <ServiceCard
                    color="bg-[#8945f8]"
                    title="Best changes rates"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Security is guaranted. We always maintain privacy and mainting quality of our products."
                />
                <ServiceCard
                    color="bg-[#f84550]"
                    title="Fastest transactions"
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="Security is guaranted. We always maintain privacy and mainting quality of our products."
                />
            </div>
        </div>
    );
};

export default Services;
