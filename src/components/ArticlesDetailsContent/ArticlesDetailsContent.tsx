const ArticlesDetailsContent = ({
  content,
}: {
  content: string;
}): JSX.Element => {
  const articleContent = JSON.parse(content);

  return <div dangerouslySetInnerHTML={{ __html: articleContent }}></div>;
};

export default ArticlesDetailsContent;
