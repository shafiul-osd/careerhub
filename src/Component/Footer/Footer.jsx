import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
const Footer = () => {
    return (
        <div>
            {/* main div ayta ayta flex/grid korte hbe */}
            <div className="grid grid-cols-5 bg-black text-white px-16 py-4 mt-10">
                <div>
                    {/* carerrhub thakbe ayta */}
                    <h2>CareerHub</h2>
                    <p> There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className="flex gap-2 border border-dotted w-1/3 p-1">
                        {/* careerhub er icon gulo thakbe aytai */}
                        <span><CiFacebook></CiFacebook></span>
                        <span><FiTwitter></FiTwitter></span>
                        <span><IoLogoInstagram></IoLogoInstagram></span>
                    </div>
                </div>
                <div>
                    {/* company thakbe aytai */}
                    <h2>Company</h2>
                    <p>About us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div>
                    {/* product thakbe aytai */}
                    <h2>Product</h2>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customer</p>
                    <p>Intergration</p>
                </div>
                <div>
                    {/* support thakbe aytai */}
                    <h2>Support</h2>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developer</p>

                </div>
                <div>
                    {/* contact thakbe aytai */}
                    <h2>Contact</h2>
                    <p>524 Broadway , NYC</p>
                    <p>+11109389</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;