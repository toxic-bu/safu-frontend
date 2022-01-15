import { FaTelegramPlane } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { RiInstagramLine } from "react-icons/ri";
import { AiOutlineMedium } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { CgCopyright } from "react-icons/cg";

const ContactLinkItem = ({ href, icon }) => {
    return (
        <li className="hover:text-[#C3FBD8]  mr-10 last:mr-0 text-2xl sm:text-sm sm:mr-2">
            <a href={href}>{icon}</a>
        </li>
    );
};

const Footer = () => {
    return (
        <div className="text-white w-full p-6 md:px-20 flex sm:flex-row justify-between flex-col-reverse items-center">
            <div className="text-xs flex items-center">
                <CgCopyright />
                <div>2022 All Rights Reserved.</div>
            </div>
            <ul className="flex mb-4 sm:mb-0">
                <ContactLinkItem href={"https://t.me/safu_space"} icon={<FaTelegramPlane />} />
                <ContactLinkItem href={"https://twitter.com/safu_space"} icon={<CgTwitter />} />
                <ContactLinkItem href={"https://www.instagram.com/safu.space"} icon={<RiInstagramLine />} />
                <ContactLinkItem href={"https://medium.com/@safu.space"} icon={<AiOutlineMedium />} />
                <ContactLinkItem href={"https://github.com/safuspace"} icon={<VscGithub />} />
            </ul>
        </div>
    );
};

export default Footer;
