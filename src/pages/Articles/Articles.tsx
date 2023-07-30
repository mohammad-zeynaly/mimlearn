import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ArticleBox from "../../components/ArticleBox/ArticleBox";
import useFilteredData from "../../hooks/useFilteredData";
import { MagazineBoxType } from "../../types/coursesInterface";

const Articles = (): JSX.Element => {
  const articleItems: MagazineBoxType[] = useFilteredData("articles");
  return (
    <>
      <Breadcrumb title="مقالات" currentPage="مقالات" />
      <section className="mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {articleItems.map((article) => (
              <ArticleBox key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
