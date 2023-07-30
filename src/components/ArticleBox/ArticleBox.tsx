import { Link } from "react-router-dom";
import { MagazineBoxType } from "../../types/coursesInterface";

const ArticleBox = ({ title, caption, img }: MagazineBoxType): JSX.Element => {
  return (
    <div className="rounded-2xl shadow-[0_5px_30px_rgb(70,72,77,0.08)] overflow-hidden transition-all duration-200 hover:-translate-y-1">
      <Link to={`/articles/${title}`}>
        <div className="relative after:block after:absolute after:top-0 after:w-full after:h-full after:bg-articleGradient">
          <img
            src={img}
            className="object-cover w-full h-auto "
            alt="عکس مقاله"
          />
        </div>
      </Link>
      <div className="bg-white p-4">
        <Link
          to={`/articles/${title}`}
          className="text-[#464749] block mt-2 transition-all hover:text-primary leading-6"
        >
          {title}
        </Link>
        <p className="text-[#898989] mt-8 leading-6 text-xs mb-4 sm:mb-2">
          {caption}
        </p>
      </div>
    </div>
  );
};
export default ArticleBox;
