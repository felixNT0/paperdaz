import logo from "../../assets/PaperdazLogo.png";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Receipt() {
  return (
    <div className="flex flex-col justify-center items-center bg-white my-10">
      <img src={logo} alt="logo" />
      <div className="h-[1px] w-full bg-primary mt-5" />
      <h3 className="font-bold mt-8">{`Thank you registering for {Paperlink}!`}</h3>
      <h3 className="text-start mt-3">{`{Business Name},`}</h3>
      <p> Attached is a copy of your receipt. </p>
      <p>Click to Verify Email and Create Password</p>
      <p>Regards,</p>
      <p>
        Cory Smith <br />
        Support Specialist
      </p>
      <p className="text-[#949494]">© Paperdaz LLC 2023 All Rights Reserved</p>
      <p className="text-primary">Terms of Use | Privacy Policy</p>
      <div className="flex mb-2 item-center justify-center">
        <div className="mr-1">
          <p className="bg-[#151313] p-2 rounded-full">
            <a
              href="https://www.facebook.com/profile.php?id=100083511528467"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare size={24} className="text-[#77C360]" />
            </a>
          </p>
        </div>
        <div className="mr-1">
          <p className="bg-[#151313] p-2 rounded-full">
            <a
              href="https://twitter.com/Paperdaz_"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={24} className="text-[#77C360]" />
            </a>
          </p>
        </div>
        <div className="mr-1">
          <p className="bg-[#151313] p-2 rounded-full">
            <a
              href="https://www.instagram.com/paperdaz_/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} className="text-[#77C360]" />
            </a>
          </p>
        </div>
        <div>
          <p className="bg-[#151313] p-2 rounded-full">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/paperdaz/mycompany/?viewAsMember=true"
            >
              <FaLinkedin size={24} className="text-[#77C360]" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
