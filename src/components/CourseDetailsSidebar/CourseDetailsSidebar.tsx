const CourseDetailsSidebar = (): JSX.Element => {
  return (
    <>
      <div className="bg-white rounded-lg border border-[#e5e5e5] p-4">
        <div className="bg-[#f9f9f9] relative rounded-lg border border-dashed border-[#ddd] flex justify-between items-center after:w-4 after:h-4 after:bg-white after:border-l after:border-dashed after:rounded-full after:absolute after:-right-2 before:w-4 before:h-4 before:border-r before:border-dashed before:bg-white before:rounded-full before:absolute before:-left-2">
          <h5 className="text-[#777] border-l border-[#e5e5e5] border-dashed p-4 pl-8">
            قیمت:
          </h5>
          <h6 className="p-4">21,000,000 تومان</h6>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsSidebar;
