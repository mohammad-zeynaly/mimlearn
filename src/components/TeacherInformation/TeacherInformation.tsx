import { useParams } from "react-router-dom";
import CommunicationWithTheTeacher from "../CommunicationWithTheTeacher/CommunicationWithTheTeacher";
import {
  communicationWithTheTeacherItemsType,
  TeacherItemType,
} from "../../types/coursesInterface";
import { useAppSelector } from "../../Redux/store/store";
import {
  FaEnvelopeOpenText,
  FaMobileAlt,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const communicationWithTheTeacherItems = [
  {
    id: 31,
    title: "آدرس ایمیل",
    caption: "info@haji-studiare.com",
    avatar: (
      <span className="flex justify-center items-center w-12 h-12 rounded-full border border-[#69727d]">
        <FaEnvelopeOpenText className="w-6 h-6 text-[#69727d]" />
      </span>
    ),
    type: "communicationWithTheTeacherItems",
  },
  {
    id: 32,
    title: "شماره تماس",
    caption: "09374812449",
    avatar: (
      <span className="flex justify-center items-center w-12 h-12 rounded-full border border-[#69727d]">
        <FaMobileAlt className="w-6 h-6 text-[#69727d]" />
      </span>
    ),
    type: "communicationWithTheTeacherItems",
  },
  {
    id: 33,
    title: "صفحه اینستاگرام",
    caption: "@zeynali2003",
    avatar: (
      <span className="flex justify-center items-center w-12 h-12 rounded-full border border-[#EA1267]">
        <FaInstagram className="w-6 h-6 text-[#EA1267]" />
      </span>
    ),
    type: "communicationWithTheTeacherItems",
  },
  {
    id: 34,
    title: "تلگرام",
    caption: "@zeynali2003",
    avatar: (
      <span className="flex justify-center items-center w-12 h-12 rounded-full border border-[#00BCFF]">
        <FaTelegramPlane className="w-6 h-6 text-[#00BCFF]" />
      </span>
    ),
    type: "communicationWithTheTeacherItems",
  },
  {
    id: 35,
    title: "آدرس",
    caption: "تهران، خیابان آزادی، خیابان بهبودی، ساختمان 110",
    avatar: (
      <span className="flex justify-center items-center w-12 h-12 rounded-full border border-[#69727d]">
        <MdLocationPin className="w-6 h-6 text-[#69727d]" />
      </span>
    ),
    type: "communicationWithTheTeacherItems",
  },
];

const TeacherInformation = (): JSX.Element => {
  const { teachersName } = useParams();

  const teacherDetail = useAppSelector((state) => state.courses.allTeachers);

  const mainRole: TeacherItemType | undefined = teacherDetail.find(
    (user) => user.name === teachersName
  );

  let userSocialInfo = [
    mainRole?.email,
    mainRole?.phone,
    mainRole?.instagramAccount,
    mainRole?.telegramAccount,
    mainRole?.Location,
  ];
  console.log(mainRole);
  return (
    <div className="flex flex-col lg:flex-row items-start mt-8">
      <div className="w-full lg:w-[35%]">
        <img
          src={mainRole?.img}
          className="w-full object-cover border border-dashed rounded-lg"
          alt="تصویر مدرس"
        />
        <span className="flex flex-col items-center mt-3">
          <h5 className="text-[#464749] text-lg">{mainRole?.name}</h5>
          <small className="text-sm mt-2">{mainRole?.role}</small>
        </span>
      </div>
      <div className="w-full lg:w-[63%] sm:mr-5">
        <div className="mt-6 lg:mt-0">
          <h6 className="font-vazirBold text-sm">درباره استاد:</h6>
          <p className="mt-4 text-sm leading-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطر آنچنان که لازم است.
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-5 mt-10">
          {communicationWithTheTeacherItems.map((item, itemIndex) => (
            <CommunicationWithTheTeacher
              key={item.id}
              {...item}
              socialInfo={userSocialInfo[itemIndex]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherInformation;
