import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PostsDetails from "../../components/PostsDetails/PostsDetails";
import { useAppSelector } from "../../Redux/store/store";
import ArticlesDetailsContent from "../../components/ArticlesDetailsContent/ArticlesDetailsContent";
import ArticlesLabel from "../../components/ArticlesLabel/ArticlesLabel";
import CourseComments from "../../components/CourseComments/CourseComments";

const ArticlesDetails = (): JSX.Element => {
  const { articleName } = useParams();

  const articles = useAppSelector((state) => state.courses.allArticles);

  const mainArticle = articles.find((article) => article.title === articleName);
  return (
    <section className="">
      <Breadcrumb
        title="مقالات"
        previousPage="مقالات"
        previousPageLink="/articles"
        currentPage={mainArticle?.title}
      />
      <div className="container">
        <div className="border border-fourth rounded-lg mt-8 bg-white p-4 text-[#464749]">
          <h1 className="text-xl my-2 border-b-2 border-solid border-[#f3f3f3] pb-4">
            {mainArticle?.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-[#c7c7c7] text-xs my-5">
            <PostsDetails />
          </div>
          <div className="w-full shadow-[0_1px_2px_rgba(0,0,0,.075)]">
            <img
              src={mainArticle?.imgBig}
              className="w-full h-auto object-cover"
              alt="عکس مقاله"
            />
          </div>
          <ArticlesDetailsContent />
        </div>
        <ArticlesLabel />
        <CourseComments />
      </div>
    </section>
  );
};

export default ArticlesDetails;
