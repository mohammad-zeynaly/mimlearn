// import { useState, useEffect } from "react";
import allData from "../data/allData";

const useFilteredData = (dataType: string) => {
  const filteredData = allData.filter((data) => data.type === dataType);
  return filteredData;
};

export default useFilteredData;
