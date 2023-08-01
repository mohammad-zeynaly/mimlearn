import { Link } from "react-router-dom";
import { TeacherItemType } from "../../types/coursesInterface";

const TeacherBox = ({
  img,
  teacherName,
  role,
}: TeacherItemType): JSX.Element => {
  return (
    <Link
      to={`/teachersDetails/${teacherName}`}
      className="w-full relative pb-[90%] rounded-md bg-[#495057] group overflow-hidden transition-all duration-200 hover:shadow-[0_24px_50px_3px_rgba(0,0,0,.2)]"
    >
      <span
        style={{
          backgroundImage: `url(${img})`,
        }}
        className="block bg-cover bg-center w-full h-full absolute top-0 bottom-0 left-0 right-0  transition-all duration-200 group-hover:opacity-70"
      ></span>
      <div className="p-5 absolute left-0 right-0 bottom-0 text-white bg-teacherDetailGradient">
        <h5> {teacherName} </h5>
        <h6 className="text-sm"> {role} </h6>
      </div>
    </Link>
  );
};

export default TeacherBox;
