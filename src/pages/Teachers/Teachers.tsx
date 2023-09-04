import { useEffect } from "react";
import { fetchGetTheTeachers } from "../../Redux/reducers/coursesStateSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store/store";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import TeacherBox from "../../components/TeacherBox/TeacherBox";

const Teachers = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const allTeachers = useAppSelector((state) => state.courses.allTeachers);

  useEffect(() => {
    dispatch(fetchGetTheTeachers());
  }, []);

  return (
    <section className="mt-20">
      <Breadcrumb title="مدرسین" currentPage="مدرسین" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {allTeachers.map((teacher) => (
            <TeacherBox key={teacher.id} {...teacher} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Teachers;
