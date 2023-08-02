import { FaEnvelopeOpenText } from "react-icons/fa";
import { communicationWithTheTeacherItemsType } from "../../types/coursesInterface";

interface socialInfoType {
  socialInfo?: string;
}

type CommunicationWithTheTeacherType = communicationWithTheTeacherItemsType &
  socialInfoType;

const CommunicationWithTheTeacher = ({
  avatar,
  title,
  socialInfo,
}: CommunicationWithTheTeacherType): JSX.Element => {
  return (
    <div className="w-[48%] flex items-center">
      {avatar}
      <span className="flex flex-col pr-2">
        <h6 className="text-[15px] font-vazirMedium"> {title} </h6>
        <small className="mt-1"> {socialInfo} </small>
      </span>
    </div>
  );
};

export default CommunicationWithTheTeacher;
