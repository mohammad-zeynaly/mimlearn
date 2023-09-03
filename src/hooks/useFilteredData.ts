// import { useState, useEffect } from "react";
import allData from "../data/allData";

import { allDataType } from "../types/coursesInterface";

const useFilteredData = (allCourses: allDataType[], dataType: string) => {
  if (allCourses?.length > 0) {
    const filteredData = allCourses?.filter((data) => data.type === dataType);
    return filteredData;
  } else {
    const filteredData = allData?.filter((data) => data.type === dataType);
    return filteredData;
  }
};

export default useFilteredData;
