import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { MdLocationPin } from "react-icons/md";
import {
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactUs = (): JSX.Element => {
  return (
    <section className="mt-20">
      <Breadcrumb title="تماس با ما" currentPage="تماس با ما" />
      <div className="container">
        <div className="mt-12 flex flex-col lg:flex-row justify-between items-start gap-5 text-[#464749]">
          <div className="w-full lg:w-1/2 ">
            <h5 className="text-lg">راه های ارتباطی</h5>
            <ul className="flex flex-col mt-4 text-sm leading-8">
              <li className="flex items-center mb-4">
                <MdLocationPin className="w-10 h-10 lg:w-8 lg:h-8 text-[#9AA6B1]" />
                <span className="pr-3">
                  آدرس: تهران، پاسداران، بوستان دوم، خیابان گیلان غربی، بن بست
                  مریم، پلاک 2، طبقه اول
                </span>
              </li>
              <li className="flex items-center mb-4">
                <FaPhoneAlt className="w-6 h-6 text-[#9AA6B1]" />
                <span className="pr-3">
                  تلفن های تماس: 0212345678 - 09123456789
                </span>
              </li>
              <li className="flex items-center">
                <HiOutlineMail className="w-7 h-7 text-[#9AA6B1]" />
                <span className="pr-3">mhmdzynaly977@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="font-vazirMedium">محل فرم تماس وب سایت شما</span>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-center lg:justify-end lg:mr-10 items-center gap-3 mt-5 text-white">
          <a
            href="#"
            className="bg-[#E31784] p-3 rounded-md transition-all hover:opacity-90"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="bg-[#2ca5e0] p-3 rounded-md transition-all hover:opacity-90"
          >
            <FaTelegramPlane className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="bg-[#cd201f] p-3 rounded-md transition-all hover:opacity-90"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="bg-[#2ca5e0] p-3 rounded-md transition-all hover:opacity-90"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="bg-[#3b5998] p-3 rounded-md transition-all hover:opacity-90"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
