const useFilteredData = <T extends { type: string }>(
  data: T[],
  dataType: string
) => {
  if (data?.length > 0) {
    const filteredData = data?.filter((data) => data.type === dataType);
    return filteredData;
  }
};

export default useFilteredData;
