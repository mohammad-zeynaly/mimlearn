import allData from "../../data/allData";
import ProductBox from "../ProductBox/ProductBox";

const AllCourses = ({ displayMode }: { displayMode: string }): JSX.Element => {
  const filteredProduct = allData.filter((product) => product.price! > 200_000);
  console.log("displayMode in allCourses=> ", displayMode);
  return (
    <section className="mt-8">
      <div
        className={`grid ${
          displayMode === "column" ? "grid-cols-1" : "sm:grid-cols-2"
        }  gap-4`}
      >
        {filteredProduct.map((product) => (
          <ProductBox displayMode={displayMode} {...product} />
        ))}
      </div>
    </section>
  );
};

export default AllCourses;
