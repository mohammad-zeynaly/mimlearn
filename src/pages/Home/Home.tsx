import { useState, useEffect } from "react";
import { getAllCourses } from "../../services/educationalServices";
import Header from "../../components/Header/Header";
import GraphicDesignCourses from "../../components/GraphicDesignCourses/GraphicDesignCourses";
import ProgrammingCourses from "../../components/ProgrammingCourses/ProgrammingCourses";
import RadioSite from "../../components/RadioSite/RadioSite";
import Magazines from "../../components/Magazines/Magazines";
import CustomersComments from "../../components/CustomersComments/CustomersComments";
import { CoursesType } from "../../types/coursesInterface";
import { fetchGetTheAllCourses } from "../../Redux/reducers/coursesStateSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store/store";

const Home = () => {
  // const [allCourses, setAllCourses] = useState<CoursesType[]>(
  //   [] as CoursesType[]
  // );
  const allCourses = useAppSelector((state) => state.courses.allCourses);
  const dispatch = useAppDispatch();

  // const sendGetRequestAllCourses = async () => {
  //   const response = await getAllCourses();

  //   setAllCourses(response.data);
  // };

  useEffect(() => {
    dispatch(fetchGetTheAllCourses())
  }, []);

  // useEffect(() => {
  //   console.log("allCourses=> ", allCourses);
  // },[allCourses])

  // console.log(allCourses);
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
