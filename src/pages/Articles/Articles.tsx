import { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ArticleBox from "../../components/ArticleBox/ArticleBox";
import { fetchGetTheArticles } from "../../Redux/reducers/coursesStateSlice";
import { useAppSelector, useAppDispatch } from "../../Redux/store/store";
import { MagazineBoxType } from "../../types/coursesInterface";

const Articles = (): JSX.Element => {
  const allArticles = useAppSelector((state) => state.courses.allArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetTheArticles());
  }, []);
  


  return (
    <>
      <Breadcrumb title="مقالات" currentPage="مقالات" />
      <section className="mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {allArticles.map((article) => (
              <ArticleBox key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
