import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import TeacherBox from "../../components/TeacherBox/TeacherBox";
import useFilteredData from "../../hooks/useFilteredData";
import { TeacherItemType } from "../../types/coursesInterface";

const Teachers = (): JSX.Element => {
  const teacherItems: TeacherItemType[] = useFilteredData("teachers");
  return (
    <section className="mt-20">
      <Breadcrumb title="مدرسین" currentPage="مدرسین" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {teacherItems.map((teacher) => (
            <TeacherBox {...teacher} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Teachers;
