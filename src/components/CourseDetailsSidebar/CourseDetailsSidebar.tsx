import { MdOutlinePayment } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";
import { BiBookReader, BiTimeFive } from "react-icons/bi";
import { TbTrafficLights } from "react-icons/tb";
import { MdLanguage } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CoursesType } from "../../types/coursesInterface";

const CourseDetailsSidebar = ({
  mainCourse,
}: {
  mainCourse: CoursesType;
}): JSX.Element => {
  const courseInformation = [
    {
      id: crypto.randomUUID(),
      icon: <TfiLocationPin className="w-5 h-5 ml-3" />,
      description: "نوع دوره",
      info: "غیر حضوری",
    },
    {
      id: crypto.randomUUID(),
      icon: <BiBookReader className="w-5 h-5 ml-3" />,
      description: "سطح دوره",
      info: "حرفه ای",
    },
    {
      id: crypto.randomUUID(),
      icon: <TbTrafficLights className="w-5 h-5 ml-3" />,
      description: " پیش نیاز",
      info: mainCourse.prerequisite,
    },
    {
      id: crypto.randomUUID(),
      icon: <MdLanguage className="w-5 h-5 ml-3" />,
      description: "زبان",
      info: "فارسی",
    },
    {
      id: crypto.randomUUID(),
      icon: <BiTimeFive className="w-5 h-5 ml-3" />,
      info: mainCourse.time,
    },
    {
      id: crypto.randomUUID(),
      icon: <FaChalkboardTeacher className="w-5 h-5 ml-3" />,
      info: mainCourse.teacher,
    },
  ];

  return (
    <>
      <div className="bg-white rounded-lg border border-[#e5e5e5] p-4">
        <div className="mt-2 bg-[#f9f9f9] relative rounded-lg border border-dashed border-[#ddd] flex justify-between items-center after:w-4 after:h-4 after:bg-white after:border-l after:border-dashed after:rounded-full after:absolute after:-right-2 before:w-4 before:h-4 before:border-r before:border-dashed before:bg-white before:rounded-full before:absolute before:-left-2">
          <h5 className="text-[#777] border-l border-[#e5e5e5] border-dashed p-4 pl-8">
            قیمت:
          </h5>
          <h6 className="p-4">{mainCourse.price} تومان</h6>
        </div>
        <button className="bg-[#00baa9] mt-6 font-vazirMedium text-white flex items-center justify-between p-4 text-lg rounded-lg w-full after:block">
          <MdOutlinePayment className="w-6 h-6" />
          ثبت نام دوره
        </button>
        <div className="mt-6 mb-4 flex justify-between">
          <span className="text-[#7b868a] text-sm">امتیاز 5.00 از 1 رأی</span>
          <div className="flex items-center">
            <img src="../assets/images/star-fill.svg" alt="آیکن ستاره" />
            <img src="../assets/images/star-fill.svg" alt="آیکن ستاره" />
            <img src="../assets/images/star-fill.svg" alt="آیکن ستاره" />
            <img src="../assets/images/star-fill.svg" alt="آیکن ستاره" />
            <img src="../assets/images/star-fill.svg" alt="آیکن ستاره" />
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 p-4 border border-[#e5e5e5]">
        <div className="mt-2 rounded-lg border border-dashed border-[#ddd] flex justify-center items-center p-4 text-[#555]">
          <PiStudentFill className="w-7 h-7 ml-2" />
          <div className="flex items-center">
            <h6 className="ml-2"> تعداد دانشجو : </h6>
            <span className="bg-[#f5f5f5] px-2 pt-2 pb-1 text-sm rounded-sm leading-4">
              {mainCourse.students}
            </span>
          </div>
        </div>
        <ul className="flex flex-col mt-6">
          {courseInformation.map((courseInfo) => (
            <li
              key={courseInfo.id}
              className="flex items-center border-b border-dashed border-[#ddd] py-4 text-[#7b868a] text-sm"
            >
              {courseInfo.icon}
              <span>{` ${
                courseInfo.description ? courseInfo.description + ":" : ""
              }  ${courseInfo.info} `}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CourseDetailsSidebar;
