import Header from "../../components/Header/Header";
import GraphicDesignCourses from "../../components/GraphicDesignCourses/GraphicDesignCourses";
import ProgrammingCourses from "../../components/ProgrammingCourses/ProgrammingCourses";
import RadioSite from "../../components/RadioSite/RadioSite";
import Articles from "../../components/Articles/Articles";
import CustomersComments from "../../components/CustomersComments/CustomersComments";

const Home = () => {
  return (
    <>
      <Header />
      <GraphicDesignCourses />
      <ProgrammingCourses />
      <RadioSite />
      <Articles />
      <CustomersComments />
    </>
  );
};

export default Home;
