import allData from "../../data/allData";
import { CoursesType } from "../../types/coursesInterface";
import ProductBox from "../ProductBox/ProductBox";

const AllCourses = ({
  displayMode,
  filteredProduct,
}: {
  displayMode: string;
  filteredProduct: CoursesType[];
}): JSX.Element => {
  return (
    <section className="mt-8">
      <div
        className={`grid ${
          displayMode === "column" ? "grid-cols-1" : "sm:grid-cols-2"
        }  gap-4`}
      >
        {filteredProduct.map((product) => (
          <ProductBox key={product.id} displayMode={displayMode} {...product} />
        ))}
      </div>
    </section>
  );
};

export default AllCourses;
