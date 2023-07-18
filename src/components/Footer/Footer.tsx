import { useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface FooterItemsType {
  id: string;
  caption?: string;
  icon?: JSX.Element;
  title?: string;
  link?: string;
}

const Footer = (): JSX.Element => {
  const [footerAboutItems, setFooterAboutItems] = useState<FooterItemsType[]>([
    {
      id: crypto.randomUUID(),
      caption: "تهران، یوسف آباد، خ چهلم ، پلاک 17",
      icon: <TfiLocationPin className="w-6 h-6" />,
    },
    {
      id: crypto.randomUUID(),
      caption: "02188002100",
      icon: <BsPhone className="w-6 h-6" />,
    },
    {
      id: crypto.randomUUID(),
      caption: "info@mimlearn.ir",
      icon: <HiOutlineMail className="w-6 h-6" />,
    },
  ]);

  const [footerCustomListItems, setFooterCustomListItems] = useState<
    FooterItemsType[]
  >([
    { id: crypto.randomUUID(), title: "صفحه اصلی", link: "/" },
    { id: crypto.randomUUID(), title: " تماس با ما", link: "/contact-us" },
    { id: crypto.randomUUID(), title: "درباره ما", link: "/about-us" },
    { id: crypto.randomUUID(), title: "فروشگاه", link: "/store" },
  ]);

  const [footerLists, setFooterLists] = useState<FooterItemsType[]>([
    { id: crypto.randomUUID(), title: "بلاگ", link: "/blog" },
    { id: crypto.randomUUID(), title: "حساب کاربری من", link: "/login" },
    { id: crypto.randomUUID(), title: "بلاگ", link: "/shopping-cart" },
  ]);

  return (
    <footer className="mt-20 bg-[#353338] text-white w-full">
      <div className="hidden lg:-translate-y-8 xl:-translate-y-12 lg:w-full lg:block 2xl:-translate-y-14 min-[2000px]:hidden">
        <svg
          className="overflow-hidden absolute -right-[5px] 2xl:-right-2 w-[101%]"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 1600 57.8"
          fill="#ec406a"
        >
          <path
            d="M1593.8,57.7l0.2-29.4c-208.3,18.6-307,10-429.1-14.6c-122-24.6-195-10.3-336.6,21.8S491.9,13.2,345.4,13.2
	          S111,45.8,7.4,45.8v11.9L1593.8,57.7L1593.8,57.7z"
          />
        </svg>
      </div>
      <div className="container">
        <div className="py-12 px-4 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <ul className="flex flex-col text-sm">
            <h5 className="text-base after:block after:w-6 after:bg-primary after:h-[3px] flex items-center after:mr-2">
              درباره میم لرن
            </h5>
            <p className="leading-8 mt-5">
              ما برند میم لرن را نامگذاری کردیم، زیرا برای ما بهترین علامت های
              تجاری ساده هستند. مارک ها رشد می کنند در توانایی آنها درک می شود.
            </p>
            {footerAboutItems.map((item) => (
              <li key={item.id} className="flex items-center  mt-5 font-light">
                {item.icon}
                <span className="pr-2">{item.caption}</span>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col text-sm ">
            <h5 className="text-base after:block after:w-6 after:bg-primary after:h-[3px] flex items-center after:mr-2">
              فهرست سفارشی
            </h5>
            {footerCustomListItems.map((listItem) => (
              <li
                key={listItem.id}
                className=" group mt-5 transition-all duration-200 hover:-translate-x-1 "
              >
                <Link
                  to={`${listItem.link}`}
                  className="align-middle group-hover:before:w-4 before:w-0 before:h-[1px] before:bg-white before:inline-flex before:ml-1"
                >
                  {listItem.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col text-sm">
            {footerLists.map((list) => (
              <li
                key={list.id}
                className=" group mt-5 transition-all duration-200 hover:-translate-x-1 "
              >
                <Link
                  to={`${list.link}`}
                  className="align-middle group-hover:before:w-4 before:w-0 before:h-[1px] before:bg-white before:inline-flex before:ml-1"
                >
                  {list.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col">
            <div className="flex items-center">
              <img
                className=" w-28 h-28 object-cover sm:w-36 sm:h-36"
                src="./assets/images/enamad.png"
                alt="enamad image"
              />
              <img
                className=" w-28 h-28 object-cover sm:w-36 sm:h-36"
                src="./assets/images/samandehi.png"
                alt="enamad image"
              />
            </div>
            <div className="relative mt-5">
              <HiOutlineMail className="w-5 h-5 text-[#6c757d] absolute left-2 top-[30%]" />
              <Input
                id="email"
                type="email"
                className="bg-white text-[#353338] rounded-lg text-sm text-left focus:outline-none placeholder:text-sm py-3 px-12 w-full"
                placeholder="ایمیل خود را وارد کنید"
              />
              <Button
                type="submit"
                className="bg-primary py-3 text-white px-3 text-sm rounded-lg rounded-tl-none rounded-bl-none absolute right-0 lg:-right-14"
              >
                اشتراک
              </Button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-center bg-[rgba(0,0,0,.08)] px-4 py-5 select-none">
        طراحی و توسعه توسط محمد زینالی - مرداد 1402
      </p>
    </footer>
  );
};
export default Footer;
