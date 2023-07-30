import Header from "../../components/Header/Header";
import GraphicDesignCourses from "../../components/GraphicDesignCourses/GraphicDesignCourses";
import ProgrammingCourses from "../../components/ProgrammingCourses/ProgrammingCourses";
import RadioSite from "../../components/RadioSite/RadioSite";
import Magazines from "../../components/Magazines/Magazines";
import CustomersComments from "../../components/CustomersComments/CustomersComments";

const Home = () => {
  return (
    <>
      <Header />
      <GraphicDesignCourses />
      <ProgrammingCourses />
      <RadioSite />
      <Magazines />
      <CustomersComments />
    </>
  );
};

export default Home;
