import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import TeacherInformation from "../../components/TeacherInformation/TeacherInformation";

const TeachersDetails = (): JSX.Element => {
  return (
    <section className="mt-20">
      <Breadcrumb
        title="علی رحیمی"
        currentPage="علی رحیمی"
        previousPage=" مدرسین"
        previousPageLink="/teachers"
      />
      <div className="container">
      <TeacherInformation />
      </div>
    </section>
  );
};
export default TeachersDetails;
