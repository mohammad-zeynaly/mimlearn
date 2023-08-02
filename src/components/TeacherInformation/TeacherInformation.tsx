import { useParams } from "react-router-dom";
import CommunicationWithTheTeacher from "../CommunicationWithTheTeacher/CommunicationWithTheTeacher";
import useFilteredData from "../../hooks/useFilteredData";
import {
  communicationWithTheTeacherItemsType,
  TeacherItemType,
} from "../../types/coursesInterface";
import allData from "../../data/allData";

const TeacherInformation = (): JSX.Element => {
  const communicationWithTheTeacherItems: communicationWithTheTeacherItemsType[] =
    useFilteredData("communicationWithTheTeacherItems");
  const { teachersName } = useParams();

  const mainRole: TeacherItemType | undefined = allData.find(
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
    <div className="flex items-start mt-8">
      <div className=" w-[35%]">
        <img
          src={mainRole?.img}
          className="border border-dashed rounded-lg"
          alt="تصویر مدرس"
        />
        <span className="flex flex-col items-center mt-3">
          <h5 className="text-[#464749] text-lg">{mainRole?.name}</h5>
          <small className="text-sm mt-2">{mainRole?.role}</small>
        </span>
      </div>
      <div className="w-[63%] sm:mr-5">
        <div className="">
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
